import dotenv from 'dotenv';
import typeDefs from './schema';
import resolvers from './resolvers';
import { ApolloServer as ApolloDServerDev, BaseContext } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const port = process.env.PORT ?? 4000;

let schema = makeExecutableSchema({
	typeDefs: [constraintDirectiveTypeDefs, typeDefs],
	resolvers,
});

schema = constraintDirective()(schema);

const server = new ApolloDServerDev<BaseContext>({
	schema,
	introspection: true,
	allowBatchedHttpRequests: true,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

const startApolloServer = async () => {
	try {
		await server.start();
		app.use('/graphql', cors<cors.CorsRequest>({ origin: '*' }), express.json(), expressMiddleware(server));
		app.use((req, res, next) => {
			if (!allowedOrigins.includes(req.headers.origin ?? '')) {
				console.log('Origin not allowed:', req.headers.origin);
			} else {
				console.log('server hit from: ', req.headers.origin);
			}
			next();
		});
	} catch (err: any) {
		console.error('Error starting server', err);
	}
};

const startHttpServer = async () => {
	try {
		await new Promise<void>((resolve) => httpServer.listen({ port: 5000 }, resolve));
		console.log(`🚀 Server ready at http://localhost:5000/graphql`);
	} catch (err: any) {
		console.error('Error starting server', err);
	}
};

startApolloServer()
	.then(() => {
		startHttpServer();
	})
	.catch((err) => {
		console.error('Error starting server', err);
	});
