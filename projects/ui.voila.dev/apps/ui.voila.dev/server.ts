const glob = new Bun.Glob(
	"**/*.{woff2,css,html,js,json,svg,png,jpg,jpeg,gif,webp,ico}",
);
const routes: Record<string, Response> = {};

for (const file of glob.scanSync("./dist")) {
	const pathname = `/${file.replace("index.html", "")}`.replace(
		/(?<=.)\/$/,
		"",
	);
	const bunFile = Bun.file(`./dist/${file}`);
	routes[pathname] = new Response(bunFile, {
		headers: {
			"Content-Type": bunFile.type,
		},
	});
}

const server = Bun.serve({
	port: process.env.PORT || 3000,
	routes,
	fetch(request) {
		const pathname = new URL(request.url).pathname;
		// Redirect trailing slash to non-trailing slash
		if (pathname !== "/" && pathname.endsWith("/")) {
			return Response.redirect(
				new URL(pathname.slice(0, -1), request.url),
				301,
			);
		}
		return new Response(Bun.file("./dist/404.html"), { status: 404 });
	},
});

console.log(`Server running at http://localhost:${server.port}`);
