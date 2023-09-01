/**
 * @swagger
 * /api/health:
 *   get:
 *     description: Check the health status of the environment.
 *     responses:
 *       200:
 *         description: Environment is healthy!
 */
export async function GET(_request: Request) {
  // Do whatever you want
  return new Response("Environment is healthy!", {
    status: 200
  });
}
