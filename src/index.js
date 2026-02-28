/**
 * Cloudflare Worker Entry Point
 * Managed by IDP Universal Workspace Manager
 */

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      
      // Simple response example
      const response = {
        message: 'Cloudflare Worker - IDP Template',
        path: url.pathname,
        method: request.method,
        environment: env.ENVIRONMENT || 'dev',
        timestamp: new Date().toISOString()
      };

      return new Response(JSON.stringify(response, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

