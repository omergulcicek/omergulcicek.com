import { mkdir, readdir, readFile, unlink } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outputDir = path.join(rootDir, "public/img/bookmarks")
const defaultSize = 120
const librarySize = 512
const libraryOnly = process.argv.includes("--library-only")

const bookmarkImages = [
	{
			id: "blog-addy-osmani-com-blog",
			url: "https://rdl.ink/render/https%3A%2F%2Faddyosmani.com%2Fblog%2F"
		},
	{
			id: "blog-ishadeed-com-articles",
			url: "https://ishadeed.com/assets/social/card-generic.jpg"
		},
	{
			id: "blog-anthropic-com-research",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.anthropic.com%2Fresearch"
		},
	{
			id: "blog-builder-io-blog",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.builder.io%2Fblog"
		},
	{
			id: "blog-css-irl-info",
			url: "https://rdl.ink/render/https%3A%2F%2Fcss-irl.info%2F"
		},
	{
			id: "blog-css-tricks-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fcss-tricks.com%2F"
		},
	{
			id: "blog-daktilo1984-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fdaktilo1984.com%2F"
		},
	{
			id: "blog-daron-blog",
			url: "https://rdl.ink/render/https%3A%2F%2Fdaron.blog%2F"
		},
	{
			id: "blog-fatihhayrioglu-com",
			url: "https://rdl.ink/render/https%3A%2F%2Ffatihhayrioglu.com%2F"
		},
	{
			id: "blog-raindrop-io-ahmetsehacar",
			url: "https://rdl.ink/render/https%3A%2F%2Fraindrop.io%2Fahmetsehacar"
		},
	{
			id: "blog-jakub-kr",
			url: "https://rdl.ink/render/https%3A%2F%2Fjakub.kr%2F"
		},
	{
			id: "blog-medium-com-kodcular",
			url: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://medium.com/kodcular&size=128"
		},
	{
			id: "blog-nextradar-dev-content-nextjs",
			url: "https://rdl.ink/render/https%3A%2F%2Fnextradar.dev%2Fcontent%2Fnextjs"
		},
	{
			id: "blog-smashingmagazine-com-articles",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.smashingmagazine.com%2Farticles%2F"
		},
	{
			id: "blog-taniarascia-com-blog",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.taniarascia.com%2Fblog%2F"
		},
	{
			id: "blog-tidewave-net-categories-nextjs",
			url: "https://rdl.ink/render/https%3A%2F%2Ftidewave.net%2Fcategories%2Fnextjs"
		},
	{
			id: "blog-tkdodo-eu-blog-all",
			url: "https://rdl.ink/render/https%3A%2F%2Ftkdodo.eu%2Fblog%2Fall"
		},
	{
			id: "blog-medium-com-turkiye",
			url: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://medium.com/t%C3%BCrkiye&size=128"
		},
	{
			id: "blog-una-im",
			url: "https://rdl.ink/render/https%3A%2F%2Funa.im%2F"
		},
	{
			id: "blog-upstash-com-blog",
			url: "https://rdl.ink/render/https%3A%2F%2Fupstash.com%2Fblog"
		},
	{
			id: "frontend-evilcharts-com-docs",
			url: "https://evilcharts.com/og/og-image.png"
		},
	{
			id: "frontend-ui-bklit-com",
			url: "https://ui.bklit.com/twitter-image.png?af16b0366092fe16"
		},
	{
			id: "frontend-transitions-dev",
			url: "https://transitions.dev/assets/og-image.jpg"
		},
	{
			id: "frontend-emailmd-dev",
			url: "https://www.emailmd.dev/_next/image?url=https%3A%2F%2Fimgs.emailmd.dev%2Fss%2Fconfirm_email.png&w=1200&q=75"
		},
	{
			id: "frontend-printer-animation-vercel-app",
			url: "https://rdl.ink/render/https%3A%2F%2Fprinter-animation.vercel.app%2F"
		},
	{
			id: "frontend-3dsvg-design",
			url: "https://3dsvg.design/opengraph-image.png?opengraph-image.16og9b5jmsmvd.png?dpl=dpl_AwtZHBoNY2nDgejm83UZHJSVyy4d"
		},
	{
			id: "frontend-data-table-openstatus-dev",
			url: "https://data-table.openstatus.dev/assets/data-table-infinite.png"
		},
	{
			id: "frontend-thesvg-org",
			url: "https://thesvg.org/og-image.png"
		},
	{
			id: "frontend-iocombats-com",
			url: "https://www.iocombats.com/app-screenshot.png"
		},
	{
			id: "frontend-spell-sh",
			url: "https://spell.sh/og"
		},
	{
			id: "frontend-favicon-io",
			url: "https://favicon.io/twitter-image.png"
		},
	{
			id: "frontend-blobmaker-app",
			url: "https://www.blobmaker.app/static/blobmaker-cover-703617855c36334d464a0690d71f7a75.jpg"
		},
	{
			id: "frontend-repostars-dev",
			url: "https://repostars.dev/og-image.png?v=4"
		},
	{
			id: "frontend-npmjs-com-package-react-use-wizard",
			url: "https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
		},
	{
			id: "frontend-npmjs-com-package-react-grab",
			url: "https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
		},
	{
			id: "frontend-markdown-new",
			url: "https://markdown.new/og-image.jpg"
		},
	{
			id: "frontend-sileo-aaryan-design",
			url: "https://rdl.ink/render/https%3A%2F%2Fsileo.aaryan.design%2F"
		},
	{
			id: "frontend-gitingest-com",
			url: "https://gitingest.com/static/og-image.png"
		},
	{
			id: "frontend-squoosh-app",
			url: "https://squoosh.app/c/icon-large-maskable-c2078ced.png"
		},
	{
			id: "frontend-creative-tim-com-ui",
			url: "https://raw.githubusercontent.com/creativetimofficial/ui/refs/heads/main/apps/www/public/opengraph-image.png"
		},
	{
			id: "frontend-animateicons-in",
			url: "https://rdl.ink/render/https%3A%2F%2Fanimateicons.in%2F"
		},
	{
			id: "frontend-moondream-ai",
			url: "https://moondream.ai/images/og/site.jpg"
		},
	{
			id: "frontend-squircle-art",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.squircle.art%2F"
		},
	{
			id: "frontend-mapcn-dev",
			url: "https://mapcn.dev/banner.png"
		},
	{
			id: "frontend-lucide-animated-com",
			url: "https://rdl.ink/render/https%3A%2F%2Flucide-animated.com%2F"
		},
	{
			id: "frontend-grubersjoe-github-io-react-github-calendar",
			url: "https://rdl.ink/render/https%3A%2F%2Fgrubersjoe.github.io%2Freact-github-calendar%2F%23%2F%3Fuser%3Domergulcicek"
		},
	{
			id: "frontend-squircle-style",
			url: "https://squircle.style/og.png"
		},
	{
			id: "frontend-revola-sameerjs-com",
			url: "https://revola.sameerjs.com/og?title=Revola&description=One%20component.%20Modal%20on%20desktop,%20Drawer%20on%20mobile."
		},
	{
			id: "frontend-buouui-com-docs-animations-event-calendar",
			url: "https://buouui.com/og.jpg"
		},
	{
			id: "frontend-better-upload-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fbetter-upload.com%2F"
		},
	{
			id: "frontend-square-lndev-me",
			url: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://square.lndev.me&size=128"
		},
	{
			id: "frontend-npmjs-com-package-tonl",
			url: "https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
		},
	{
			id: "frontend-logo-dev",
			url: "https://www.logo.dev/opengraph.png"
		},
	{
			id: "frontend-bansal-io-pattern-css",
			url: "https://images.unsplash.com/photo-1488707872600-5507977fe355?auto=format&fit=crop&w=500&q=80"
		},
	{
			id: "frontend-shadcn-image-cropper-vercel-app",
			url: "https://shadcn-image-cropper.vercel.app/opengraph-image.png?a93a5c1a1bb742d6"
		},
	{
			id: "frontend-wigggle-ui-vercel-app",
			url: "https://wigggle-ui.vercel.app/twitter-image.png?twitter-image.a574ff17.png"
		},
	{
			id: "frontend-big-calendar-vercel-app-month-view",
			url: "https://rdl.ink/render/https%3A%2F%2Fbig-calendar.vercel.app%2Fmonth-view"
		},
	{
			id: "frontend-design-dev",
			url: "https://design.dev/assets/img/logo.svg"
		},
	{
			id: "frontend-ui-x-junwen-k-dev",
			url: "https://ui-x.junwen-k.dev/og.jpg"
		},
	{
			id: "frontend-ui-spectrumhq-in",
			url: "https://ui.spectrumhq.in/og.png"
		},
	{
			id: "frontend-shadcn-builder-com",
			url: "https://www.shadcn-builder.com/og-image.png"
		},
	{
			id: "frontend-base-ui-com-react-overview-quick-start",
			url: "https://rdl.ink/render/https%3A%2F%2Fbase-ui.com%2Freact%2Foverview%2Fquick-start"
		},
	{
			id: "frontend-reactflow-dev",
			url: "https://reactflow.dev/opengraph-image.jpg?41910ad66a20ba6a"
		},
	{
			id: "frontend-tweakcn-com",
			url: "https://tweakcn.com/og-image.v050725.png"
		},
	{
			id: "frontend-codediagram-io",
			url: "https://www.codediagram.io/assets/logo-big-square.png"
		},
	{
			id: "frontend-forgeui-in",
			url: "https://forgeui.in/forgeui-ogimage-v2.png"
		},
	{
			id: "frontend-npmjs-com-package-react-just-parallax",
			url: "https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
		},
	{
			id: "frontend-github-com-francoischalifour-medium-zoom",
			url: "https://opengraph.githubassets.com/1/francoischalifour/medium-zoom"
		},
	{
			id: "frontend-suchi-imharsh-in",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.suchi.imharsh.in%2F"
		},
	{
			id: "frontend-auto-animate-formkit-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fauto-animate.formkit.com%2F"
		},
	{
			id: "frontend-zustand-demo-pmnd-rs",
			url: "https://rdl.ink/render/https%3A%2F%2Fzustand-demo.pmnd.rs%2F"
		},
	{
			id: "frontend-imask-js-org",
			url: "https://rdl.ink/render/https%3A%2F%2Fimask.js.org%2F"
		},
	{
			id: "frontend-react-svgr-com",
			url: "https://rdl.ink/render/https%3A%2F%2Freact-svgr.com%2F"
		},
	{
			id: "frontend-npmjs-com-package-clsx",
			url: "https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
		},
	{
			id: "frontend-tailwindcss-com",
			url: "https://tailwindcss.com/opengraph-image.jpg"
		},
	{
			id: "frontend-skeletongenerator-com",
			url: "https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
		},
	{
			id: "frontend-tanstack-com",
			url: "https://rdl.ink/render/https%3A%2F%2Ftanstack.com%2F"
		},
	{
			id: "frontend-storybook-js-org",
			url: "https://storybook.js.org/opengraph-image.jpg"
		},
	{
			id: "frontend-ui-shadcn-com",
			url: "https://ui.shadcn.com/opengraph-image.png"
		},
	{
			id: "frontend-react-hook-form-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.react-hook-form.com%2F"
		},
	{
			id: "frontend-platejs-org",
			url: "https://rdl.ink/render/https%3A%2F%2Fplatejs.org%2F"
		},
	{
			id: "frontend-nextjs-org",
			url: "https://rdl.ink/render/https%3A%2F%2Fnextjs.org%2F"
		},
	{
			id: "frontend-motion-dev",
			url: "https://rdl.ink/render/https%3A%2F%2Fmotion.dev%2F"
		},
	{
			id: "frontend-typicode-github-io-husky",
			url: "https://rdl.ink/render/https%3A%2F%2Ftypicode.github.io%2Fhusky%2F"
		},
	{
			id: "frontend-github-com-duskload-react-device-detect-tab-readme-ov-file",
			url: "https://opengraph.githubassets.com/1/duskload/react-device-detect"
		},
	{
			id: "frontend-usehooks-ts-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fusehooks-ts.com%2F"
		},
	{
			id: "frontend-react-querybuilder-js-org",
			url: "https://rdl.ink/render/https%3A%2F%2Freact-querybuilder.js.org%2F"
		},
	{
			id: "frontend-joren-co-tailwindcss-debug-screens-demo",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.joren.co%2Ftailwindcss-debug-screens-demo%2F"
		},
	{
			id: "frontend-react-scan-com",
			url: "https://rdl.ink/render/https%3A%2F%2Freact-scan.com%2F"
		},
	{
			id: "frontend-cva-style-docs",
			url: "https://rdl.ink/render/https%3A%2F%2Fcva.style%2Fdocs"
		},
	{
			id: "frontend-tailwind-variants-org",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.tailwind-variants.org%2F"
		},
	{
			id: "frontend-trpc-io",
			url: "https://rdl.ink/render/https%3A%2F%2Ftrpc.io%2F"
		},
	{
			id: "frontend-nuqs-47ng-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fnuqs.47ng.com%2F"
		},
	{
			id: "frontend-cmdk-paco-me",
			url: "https://rdl.ink/render/https%3A%2F%2Fcmdk.paco.me%2F"
		},
	{
			id: "frontend-frimousse-liveblocks-io-ref-dailydev",
			url: "https://rdl.ink/render/https%3A%2F%2Ffrimousse.liveblocks.io%2F"
		},
	{
			id: "frontend-animateicons-vercel-app",
			url: "https://rdl.ink/render/https%3A%2F%2Fanimateicons.vercel.app%2F"
		},
	{
			id: "frontend-21st-dev-home",
			url: "https://rdl.ink/render/https%3A%2F%2F21st.dev%2Fhome"
		},
	{
			id: "frontend-launchmvpfast-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.launchmvpfast.com%2F"
		},
	{
			id: "frontend-formcn-dev",
			url: "https://rdl.ink/render/https%3A%2F%2Fformcn.dev%2F"
		},
	{
			id: "frontend-docusaurus-io",
			url: "https://rdl.ink/render/https%3A%2F%2Fdocusaurus.io%2F"
		},
	{
			id: "frontend-shadcn-svelte-extras-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.shadcn-svelte-extras.com%2F"
		},
	{
			id: "frontend-cult-ui-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.cult-ui.com%2F"
		},
	{
			id: "frontend-andreasbm-github-io-web-skills",
			url: "https://opengraph.githubassets.com/1/andreasbm/web-skills"
		},
	{
			id: "frontend-fancycomponents-dev-components",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.fancycomponents.dev%2Fcomponents"
		},
	{
			id: "frontend-skiper-ui-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fskiper-ui.com%2F"
		},
	{
			id: "frontend-github-com-birobirobiro-awesome-shadcn-ui",
			url: "https://opengraph.githubassets.com/1/birobirobiro/awesome-shadcn-ui"
		},
	{
			id: "frontend-frontendchecklist-io",
			url: "https://rdl.ink/render/https%3A%2F%2Ffrontendchecklist.io%2F"
		},
	{
			id: "frontend-conventionalcommits-org-en-v1-0-0",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.conventionalcommits.org%2F"
		},
	{
			id: "frontend-component-party-dev",
			url: "https://rdl.ink/render/https%3A%2F%2Fcomponent-party.dev%2F"
		},
	{
			id: "frontend-tailwind-colors-meidev-co",
			url: "https://rdl.ink/render/https%3A%2F%2Ftailwindcss.com%2F"
		},
	{
			id: "frontend-tailwindgen-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.tailwindgen.com%2F"
		},
	{
			id: "frontend-shadcn-form-build-vercel-app",
			url: "https://rdl.ink/render/https%3A%2F%2Fwww.shadcn-builder.com%2F"
		},
	{
			id: "frontend-originui-com",
			url: "https://rdl.ink/render/https%3A%2F%2Foriginui.com%2F"
		},
	{
			id: "frontend-magicui-design",
			url: "https://rdl.ink/render/https%3A%2F%2Fmagicui.design%2F"
		},
	{
			id: "frontend-ui-aceternity-com",
			url: "https://rdl.ink/render/https%3A%2F%2Fui.aceternity.com%2F"
		},
	{
			id: "personal-imdb-com-title-tt4154796",
			url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg"
		},
	{
			id: "personal-imdb-com-title-tt0468569",
			url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
		},
	{
			id: "personal-imdb-com-title-tt7286456",
			url: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
		},
	{
			id: "personal-imdb-com-title-tt1831164",
			url: "https://m.media-amazon.com/images/M/MV5BNzQ4ZTMxM2UtYTY2MS00NjlmLTlmNmYtYWFmMjMyMzZmZjZkXkEyXkFqcGc@._V1_SX300.jpg"
		},
	{
			id: "personal-imdb-com-title-tt1475582",
			url: "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
		},
	{
			id: "personal-imdb-com-title-tt0167260",
			url: "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
		},
	{
			id: "personal-imdb-com-title-tt1795096",
			url: "https://m.media-amazon.com/images/M/MV5BZmMyM2Q3YWMtMmE4NS00ODczLWIwYjctN2MzZThiZWEyMTcyXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg"
		},
	{
			id: "personal-imdb-com-title-tt7920978",
			url: "https://m.media-amazon.com/images/M/MV5BMjM0NWYyZDAtOTZjMS00OGZiLWE0MWEtYjdiNDhiYzJkYjE4XkEyXkFqcGc@._V1_SX300.jpg"
		},
	{
			id: "personal-imdb-com-title-tt7949218",
			url: "https://m.media-amazon.com/images/M/MV5BMDEwYTg3MWQtZTNmMi00ZjU1LTkwNWQtZDFmODQ5NjcwMDc2XkEyXkFqcGc@._V1_SX300.jpg"
		},
	{
			id: "personal-imdb-com-title-tt31323988",
			url: "https://m.media-amazon.com/images/M/MV5BOGYzYTkyNzAtZmYwNy00YzA0LThkYzctYjQwY2FiMTY4MTY4XkEyXkFqcGc@._V1_SX300.jpg"
		},
	{
			id: "personal-imdb-com-title-tt0252488",
			url: "https://m.media-amazon.com/images/M/MV5BZmY3MjVhMmQtOTcwYy00ZjcyLWFiZDgtN2JiODVjNjQzYWQyXkEyXkFqcGc@._V1_SX300.jpg"
		},
	{
			id: "personal-imdb-com-title-tt10431500",
			url: "https://m.media-amazon.com/images/M/MV5BMzZmMWUxZGMtOTg3MS00OTA4LTg5NzktZGY4NjgyMzExYTZhXkEyXkFqcGc@._V1_SX300.jpg"
		},
	{
			id: "personal-imdb-com-title-tt6316138",
			url: "https://m.media-amazon.com/images/M/MV5BMDRhYTNiMjMtY2U1OC00NWIwLTk0MTEtMDY1NTMxZDExYjBmXkEyXkFqcGc@._V1_SX300.jpg"
		},
	{
		id: "library-osmanli-turkcesi-kilavuzu2-106298",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11457356"
	},
	{
		id: "library-osmanlilar-kulturel-tarih-460636",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:5906393"
	},
	{
		id: "library-avrupanin-fethi-osmanli-cihana-nasil-hukmetti-701864",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11979507"
	},
	{
		id: "library-biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli-80245",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11981534"
	},
	{
		id: "library-imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti-582119",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11416782"
	},
	{
		id: "library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12051926"
	},
	{
		id: "library-yavuz-sultan-selim-324084",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1032341"
	},
	{
		id: "library-muhtesem-suleyman-415302",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3047663"
	},
	{
		id: "library-bektasilik-710982",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12023603"
	},
	{
		id: "library-futuhul-gayb-alemlerin-kesfi-487377",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11889480"
	},
	{
		id: "library-uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari-620987",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11582568"
	},
	{
		id: "library-bu-dunya-icin-yaratilmadin-641708",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11676182"
	},
	{
		id: "library-son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi-721477",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12071671"
	},
	{
		id: "library-itikadin-muhafizlari-osmanlilar-689752",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11922587"
	},
	{
		id: "library-iskendersezar-paralel-hayatlar-karton-kapak-371513",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1034455"
	},
	{
		id: "library-spqr-antik-roma-tarihi-449296",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12211537"
	},
	{
		id: "library-zeytindagi-gunumuz-turkcesiyle-668164",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12226528"
	},
	{
		id: "library-ataturkun-hatiralari-524510",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11799403"
	},
	{
		id: "library-sair-fatih-avni-150920",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:57935"
	},
	{
		id: "library-surname-bir-osmanli-macerasi-631391",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11683118"
	},
	{
		id: "library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1107209"
	},
	{
		id: "library-osmanli-turkcesi-kilavuzu1-106297",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11526910"
	},
	{
		id: "library-yavuz-sultan-selim-401713",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12239915"
	},
	{
		id: "library-fetih-ve-kiyamet-1453-595100",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11462556"
	},
	{
		id: "library-yeni-roma-dogudaki-roma-imparatorlugu-395700-642279",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11679662"
	},
	{
		id: "library-buyuk-konstantin-yenilmez-imparator-705347",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11996760"
	},
	{
		id: "library-antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa-701428",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11976907"
	},
	{
		id: "library-fihi-ma-fih-mevlananin-konusma-ve-sohbetleri-461625",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11328119"
	},
	{
		id: "library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11930676"
	},
	{
		id: "library-dersaadette-bayram-sabahlari-509826",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:9334068"
	},
	{
		id: "library-40-pratik-sunnet-599358",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11480197"
	},
	{
		id: "library-japon-savas-sanati-busido-396401",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11731012"
	},
	{
		id: "library-fatih-sultan-mehmed-717193",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12054898"
	},
	{
		id: "library-turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm-471959",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11475849"
	},
	{
		id: "library-cumhuriyetin-tarihi-58230",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11767585"
	},
	{
		id: "library-islam-dusuncesi-551964",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11901366"
	},
	{
		id: "library-islamin-vadettikleri-467400",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11360654"
	},
	{
		id: "library-insanligin-medeniyet-destani-461827",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11328118"
	},
	{
		id: "library-omuzlarimda-dunya-hikayem-hayatimdir-572093",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11628993"
	},
	{
		id: "library-soyle-bana-hindiba-549240",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11628994"
	},
	{
		id: "library-ayasofyanin-gizli-tarihi-386572",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11297866"
	},
	{
		id: "library-bir-cihan-hukumdari-fatih-sultan-mehmed-455566",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12178902"
	},
	{
		id: "library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12143309"
	},
	{
		id: "library-yasamak-618603",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11967882"
	},
	{
		id: "library-bu-ulke-18263",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11460549"
	},
	{
		id: "library-bes-sehir-4787",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1106424"
	},
	{
		id: "library-muslumanca-dusunme-uzerine-denemeler-727",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11772007"
	},
	{
		id: "library-gul-yetistiren-adam-488",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11708603"
	},
	{
		id: "library-turkiyenin-maarif-davasi-4879",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11811709"
	},
	{
		id: "library-dogu-bati-arasinda-islam-495562",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11525884"
	},
	{
		id: "library-sir-4798",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11866917"
	},
	{
		id: "library-ya-tahammul-ya-sefer-4801",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:285160"
	},
	{
		id: "library-yoksulluk-icimizde-4775",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:6376052"
	},
	{
		id: "library-uzun-hikaye-19088",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11956818"
	},
	{
		id: "library-bu-boyledir-4776",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:111182"
	},
	{
		id: "library-dirilis-neslinin-amentusu-6522",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12191479"
	},
	{
		id: "library-yitik-cennet-6384",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12174782"
	},
	{
		id: "library-ideolocya-orgusu-kod36-1099",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3141465"
	},
	{
		id: "library-cole-inen-nur-kod39-1102",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3103031"
	},
	{
		id: "library-okumak-nedir-663010",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11787652"
	},
	{
		id: "library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11849114"
	},
	{
		id: "library-kesintisiz-ogrenme-42711",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11914721"
	},
	{
		id: "library-piyon-321683",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:149293"
	},
	{
		id: "library-od-261783",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12244434"
	},
	{
		id: "library-sadece-aptallar-8-saat-uyur-81650",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11374907"
	},
	{
		id: "library-hemdem-kalpten-kalbe-bir-yol-vardir-677801",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11866093"
	},
	{
		id: "library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3164442"
	},
	{
		id: "library-59-yuz-portreler-457862",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:5764123"
	},
	{
		id: "library-japonizm-ciltli-499470",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8538776"
	},
	{
		id: "library-islamin-dirilisi-6514",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12191484"
	},
	{
		id: "library-insanligin-dirilisi-6385",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12191487"
	},
	{
		id: "library-yavuz-sultan-selim-430261",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12218970"
	},
	{
		id: "library-bozkurtlar-243385",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11690531"
	},
	{
		id: "library-turancilik-milli-degerler-ve-genclik-251503",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11630535"
	},
	{
		id: "library-turk-tarihinde-meseleler-246740",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11484359"
	},
	{
		id: "library-yollarin-sonu-595418",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713972"
	},
	{
		id: "library-turk-ulkusu-251501",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11691811"
	},
	{
		id: "library-deli-kurt-243383",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11784528"
	},
	{
		id: "library-ruh-adam-588450",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713962"
	},
	{
		id: "library-atsiz-hikayeler-452636",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11637963"
	},
	{
		id: "library-maksim-gorki-ekmegimi-kazanirken",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11643068"
	},
	{
		id: "library-maksim-gorki-cocuklugum",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:264233"
	},
	{
		id: "library-maksim-gorki-benim-universitelerim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11643067"
	},
	{
		id: "library-maksim-gorki-ana",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11918708"
	},
	{
		id: "library-anonim-gilgamis-destani",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11775183"
	},
	{
		id: "library-goethe-genc-wertherin-acilari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11462566"
	},
	{
		id: "library-goethe-faust",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11355948"
	},
	{
		id: "library-george-orwell-1984",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11992857"
	},
	{
		id: "library-georges-politzer-felsefenin-temel-ilkeleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11980681"
	},
	{
		id: "library-niccolo-machiavelli-prens",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11401985"
	},
	{
		id: "library-friedrich-nietzsche-boyle-buyurdu-zerdust",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11318914"
	},
	{
		id: "library-friedrich-nietzsche-ecce-homo",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713888"
	},
	{
		id: "library-friedrich-nietzsche-putlarin-alacakaranligi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12088973"
	},
	{
		id: "library-mary-shelley-frankenstein",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4536498"
	},
	{
		id: "library-kazuo-ishiguro-beni-asla-birakma",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4745345"
	},
	{
		id: "library-jane-austen-ask-ve-gurur",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12076136"
	},
	{
		id: "library-jack-london-vahsetin-cagrisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11318995"
	},
	{
		id: "library-jack-london-meksikali",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:287785"
	},
	{
		id: "library-jack-london-ademden-once",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11318899"
	},
	{
		id: "library-sigmund-freud-totem-ve-tabu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11432165"
	},
	{
		id: "library-montaigne-denemeler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11318921"
	},
	{
		id: "library-mihail-bulgakov-genc-bir-doktorun-anilari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:997619"
	},
	{
		id: "library-lu-sin-ciglik",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:105428"
	},
	{
		id: "library-ivan-goncarov-oblomov",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11711735"
	},
	{
		id: "library-stendhal-kirmizi-ve-siyah",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12168561"
	},
	{
		id: "library-paulo-coelho-hac",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11643489"
	},
	{
		id: "library-gabriel-garcia-marquez-benim-huzunlu-orospularim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11399697"
	},
	{
		id: "library-gabriel-garcia-marquez-kirmizi-pazartesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11248758"
	},
	{
		id: "library-virginia-woolf-kendine-ait-bir-oda",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11318950"
	},
	{
		id: "library-victor-hugo-sefiller-v",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:133755"
	},
	{
		id: "library-victor-hugo-sefiller-iv",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:71412"
	},
	{
		id: "library-victor-hugo-sefiller-iii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:133763"
	},
	{
		id: "library-victor-hugo-sefiller-ii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:71420"
	},
	{
		id: "library-victor-hugo-sefiller-i",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:71421"
	},
	{
		id: "library-victor-hugo-bir-idam-mahkumunun-son-gunu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11917087"
	},
	{
		id: "library-william-golding-sineklerin-tanrisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4060201"
	},
	{
		id: "library-sir-arthur-conan-doyle-suphe-asla-uyumaz",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11509468"
	},
	{
		id: "library-sir-arthur-conan-doyle-suc-detayda-saklidir",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11509462"
	},
	{
		id: "library-sir-arthur-conan-doyle-gercekler-kanit-ister",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11509469"
	},
	{
		id: "library-sir-arthur-conan-doyle-aklin-suphesi-sucun-gercegidir",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11509467"
	},
	{
		id: "library-sir-arthur-conan-doyle-akil-oyunlarinin-golgesinde",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11509466"
	},
	{
		id: "library-gustave-flaubert-madam-bovary",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11345526"
	},
	{
		id: "library-alexandre-dumas-uc-silahsorler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8271869"
	},
	{
		id: "library-alexandre-dumas-kamelyali-kadin",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:130436"
	},
	{
		id: "library-aleksandr-puskin-yuzbasinin-kizi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12273012"
	},
	{
		id: "library-anton-cehov-hikayelerden-bir-demet",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:75426"
	},
	{
		id: "library-anton-cehov-kadin-oykuleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11231247"
	},
	{
		id: "library-anatole-france-kirmizi-zambak",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11579954"
	},
	{
		id: "library-honore-de-balzac-goriot-baba",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3993938"
	},
	{
		id: "library-honore-de-balzac-vadideki-zambak",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3050195"
	},
	{
		id: "library-brittainy-c-cherry-yuz-karasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11675778"
	},
	{
		id: "library-cengiz-aytmatov-beyaz-gemi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11779396"
	},
	{
		id: "library-cengiz-aytmatov-gun-olur-asra-bedel",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12262296"
	},
	{
		id: "library-charles-dickens-iki-sehrin-hikayesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11354819"
	},
	{
		id: "library-emile-zola-bir-ask-sayfasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1407997"
	},
	{
		id: "library-emile-zola-germinal",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:6591715"
	},
	{
		id: "library-mehmet-akif-ersoy-safahat",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11986224"
	},
	{
		id: "library-yakup-kadri-karaosmanoglu-hukum-gecesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11303984"
	},
	{
		id: "library-resat-nuri-guntekin-calikusu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12015321"
	},
	{
		id: "library-halide-edib-adivar-turkun-atesle-imtihani",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11462944"
	},
	{
		id: "library-halide-edib-adivar-vurun-kahpeye",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11257976"
	},
	{
		id: "library-halide-edib-adivar-sinekli-bakkal",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11469493"
	},
	{
		id: "library-halide-edib-adivar-atesten-gomlek",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11481508"
	},
	{
		id: "library-ahmet-hikmet-muftuoglu-haristan-ve-gulistan",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11511166"
	},
	{
		id: "library-fatma-aliye-udi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:171416"
	},
	{
		id: "library-huseyin-rahmi-gurpinar-gulyabani",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11622574"
	},
	{
		id: "library-huseyin-rahmi-gurpinar-murebbiye",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11469086"
	},
	{
		id: "library-huseyin-rahmi-gurpinar-sipsevdi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11372183"
	},
	{
		id: "library-inci-enginun-yeni-turk-edebiyati-tanzimattan-cumhuriyete",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11297671"
	},
	{
		id: "library-halid-ziya-usakligil-kirik-hayatlar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11345521"
	},
	{
		id: "library-halid-ziya-usakligil-mai-ve-siyah",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11835974"
	},
	{
		id: "library-halid-ziya-usakligil-nemide",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11454549"
	},
	{
		id: "library-kenan-hulusi-koray-osmanoflar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11456460"
	},
	{
		id: "library-omer-seyfettin-ashab-i-kehfimiz",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:130318"
	},
	{
		id: "library-recaizade-mahmud-ekrem-araba-sevdasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11404521"
	},
	{
		id: "library-saffet-nezihi-zavalli-necdet",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11494314"
	},
	{
		id: "library-samipasazade-sezai-serguzest",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11404825"
	},
	{
		id: "library-abdulhak-sinasi-hisar-fahim-bey-ve-biz",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12125965"
	},
	{
		id: "library-adalet-agaoglu-bir-dugun-gecesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11956261"
	},
	{
		id: "library-ahmet-hamdi-tanpinar-huzur",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11893657"
	},
	{
		id: "library-ahmet-hamdi-tanpinar-mahur-beste",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12145385"
	},
	{
		id: "library-erdal-oz-yaralisin",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12181046"
	},
	{
		id: "library-ihsan-oktay-anar-puslu-kitalar-atlasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11422412"
	},
	{
		id: "library-kemal-tahir-devlet-ana",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12176871"
	},
	{
		id: "library-kemal-tahir-yol-ayrimi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11641425"
	},
	{
		id: "library-kemal-tahir-karilar-kogusu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:6423724"
	},
	{
		id: "library-memduh-sevket-esendal-ayasli-ile-kiracilari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11657223"
	},
	{
		id: "library-orhan-kemal-el-kizi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12222660"
	},
	{
		id: "library-orhan-pamuk-benim-adim-kirmizi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:299746"
	},
	{
		id: "library-orhan-pamuk-kirmizi-sacli-kadin",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1145418"
	},
	{
		id: "library-orhan-pamuk-masumiyet-muzesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12164330"
	},
	{
		id: "library-orhan-pamuk-sessiz-ev",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:163319"
	},
	{
		id: "library-peyami-safa-yalniziz",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11685699"
	},
	{
		id: "library-peyami-safa-sozde-kizlar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11790665"
	},
	{
		id: "library-peyami-safa-matmazel-noraliyanin-koltugu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11802440"
	},
	{
		id: "library-peyami-safa-dokuzuncu-hariciye-kogusu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713956"
	},
	{
		id: "library-peyami-safa-cumbadan-rumbaya",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11732257"
	},
	{
		id: "library-peyami-safa-bir-tereddudun-romani",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11800575"
	},
	{
		id: "library-sabahattin-ali-kuyucakli-yusuf",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11345525"
	},
	{
		id: "library-tarik-bugra-donemecte",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:98024"
	},
	{
		id: "library-tarik-bugra-ibisin-ruyasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11691806"
	},
	{
		id: "library-tarik-bugra-osmancik",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11675237"
	},
	{
		id: "library-yasar-kemal-filler-sultani-ile-kirmizi-sakalli-topal-karinca",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:97152"
	},
	{
		id: "library-yasar-kemal-ince-memed-3",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:106052"
	},
	{
		id: "library-yasar-kemal-yagmurcuk-kusu-kimsecik-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11607153"
	},
	{
		id: "library-dilek-bilgic-esen-bir-kurt-sevdim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713739"
	},
	{
		id: "library-ahmet-umit-beyoglu-rapsodisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:10368362"
	},
	{
		id: "library-ahmed-gunbay-yildiz-sitem",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12153000"
	},
	{
		id: "library-ali-betlik-alamut-kalesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12048888"
	},
	{
		id: "library-elif-safak-iskender",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11780811"
	},
	{
		id: "library-kahraman-tazeoglu-kiyisizlar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11923408"
	},
	{
		id: "library-iskender-pala-abumrabum",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12277760"
	},
	{
		id: "library-iskender-pala-babilde-olum-istanbulda-ask",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12243369"
	},
	{
		id: "library-iskender-pala-kitab-i-ask",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:203848"
	},
	{
		id: "library-fernando-pessoa-huzursuzlugun-kitabi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12109405"
	},
	{
		id: "library-zulfu-livaneli-bir-kedi-bir-adam-bir-olum",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11385542"
	},
	{
		id: "library-zulfu-livaneli-kaplanin-sirtinda",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11655631"
	},
	{
		id: "library-zulfu-livaneli-serenad",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11483001"
	},
	{
		id: "library-nazan-bekiroglu-nar-agaci",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11517287"
	},
	{
		id: "library-selim-ileri-saz-caz-dugun-varyete",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:274974"
	},
	{
		id: "library-alain-mutlu-olma-sanati",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12134709"
	},
	{
		id: "library-busra-sanay-kardesini-dogurmak",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12232163"
	},
	{
		id: "library-jean-jacques-rousseau-toplum-sozlesmesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11735323"
	},
	{
		id: "library-roberto-esposito-kisiler-ve-seyler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11766147"
	},
	{
		id: "library-terry-eagleton-edebiyat-olayi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12025546"
	},
	{
		id: "library-ismail-hakki-aydin-yasam-5-0-kuantik-dusunce-sarmali",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11749595"
	},
	{
		id: "library-ismail-hakki-aydin-homo-deyyus",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12017930"
	},
	{
		id: "library-ismail-hakki-aydin-ve-tanri-beyni-yaratti",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11556206"
	},
	{
		id: "library-ismail-hakki-aydin-frekansa-burundum-beyin-diye-gorundum",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11640000"
	},
	{
		id: "library-ismail-hakki-aydin-frekanslar-aleminde-kainat-beyne-kucuk-noron-kainata-buyuk",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11863541"
	},
	{
		id: "library-ismail-hakki-aydin-felsefe-karada-yuzme-denizde-yurume-sanatidir",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11795595"
	},
	{
		id: "library-ismail-hakki-aydin-insan-endiseli-bir-damla-hem-parcacik-hem-dalga",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11694486"
	},
	{
		id: "library-murat-kurt-english-grammar-today",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11376731"
	},
	{
		id: "library-ismail-cetisli-bati-edebiyatinda-edebi-akimlar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11478505"
	},
	{
		id: "library-mustafa-ozkan-osmanli-turkcesi-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11834985"
	},
	{
		id: "library-pinar-ulgen-orta-cag-avrupasinda-ask-tutku-entrika-ve-romantizm",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11761448"
	},
	{
		id: "library-emin-colasan-turgut-nereden-kosuyor",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:25044"
	},
	{
		id: "library-koray-kamaci-derin-dunya-devleti-ve-ortadogu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11558560"
	},
	{
		id: "library-onur-inal-peradan-beyogluna",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:65579"
	},
	{
		id: "library-ramazan-sesen-ibn-fadlan-seyahatnamesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12066173"
	},
	{
		id: "library-kolektif-ahmet-emre-bilgili-sehir-ve-kultur-istanbul",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11608771"
	},
	{
		id: "library-mehmet-kaplan-siir-tahlilleri-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11768860"
	},
	{
		id: "library-muharrem-ergin-turk-dil-bilgisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:9890722"
	},
	{
		id: "library-janos-eckmann-cagatayca-el-kitabi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4087614"
	},
	{
		id: "library-ahmet-talat-onay-aciklamali-divan-siiri-sozlugu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:66305"
	},
	{
		id: "library-mehmet-kaplan-turk-edebiyati-uzerinde-arastirmalar-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11960114"
	},
	{
		id: "library-mehmet-samsakci-siyaset-ve-roman",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11439495"
	},
	{
		id: "library-metin-and-oyun-ve-bugu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:240821"
	},
	{
		id: "library-cem-dilcin-orneklerle-turk-siir-bilgisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:10543912"
	},
	{
		id: "library-berna-moran-edebiyat-kuramlari-ve-elestiri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11461876"
	},
	{
		id: "library-mircea-eliade-mitlerin-ozellikleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11888206"
	},
	{
		id: "library-mehmet-tekin-roman-sanati-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11628088"
	},
	{
		id: "library-muharrem-ergin-orhun-abideleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:5973971"
	},
	{
		id: "library-khaled-hosseini-ucurtma-avcisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12180333"
	},
	{
		id: "library-wilhelm-genazino-elden-dusme-dunya",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11231753"
	},
	{
		id: "library-jose-saramago-korluk",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11948029"
	},
	{
		id: "library-j-d-salinger-cavdar-tarlasinda-cocuklar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:6532396"
	},
	{
		id: "library-john-boyne-cizgili-pijamali-cocuk",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:2405"
	},
	{
		id: "library-antoine-de-saint-exupery-kucuk-prens",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11465307"
	},
	{
		id: "library-jack-london-beyaz-dis",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11318907"
	},
	{
		id: "library-john-steinbeck-fareler-ve-insanlar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12106566"
	},
	{
		id: "library-jacques-cazotte-asik-seytan",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:9717542"
	},
	{
		id: "library-yu-hua-yasamak",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12212474"
	},
	{
		id: "library-halil-cibran-ermisin-bahcesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:2574241"
	},
	{
		id: "library-halil-cibran-meczup",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:989786"
	},
	{
		id: "library-halil-cibran-ermis",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:163582"
	},
	{
		id: "library-halil-cibran-bir-gozyasi-bir-gulumseme",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11658344"
	},
	{
		id: "library-stefan-zweig-hayatin-mucizeleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11077674"
	},
	{
		id: "library-stefan-zweig-mecburiyet",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4558050"
	},
	{
		id: "library-stefan-zweig-murebbiye",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1138312"
	},
	{
		id: "library-stefan-zweig-kizil",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:5921420"
	},
	{
		id: "library-albert-camus-yabanci",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11398685"
	},
	{
		id: "library-daniel-defoe-robinson-crusoe",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11715532"
	},
	{
		id: "library-jostein-gaarder-sofienin-dunyasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11918372"
	},
	{
		id: "library-amin-maalouf-isik-bahceleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:106128"
	},
	{
		id: "library-amin-maalouf-semerkant",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1135132"
	},
	{
		id: "library-amin-maalouf-empedoklesin-dostlari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11352997"
	},
	{
		id: "library-jane-austen-gurur-ve-onyargi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11431526"
	},
	{
		id: "library-alev-alatli-hafazanallah",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:9411281"
	},
	{
		id: "library-ali-fuad-basgil-genclerle-basbasa",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11381715"
	},
	{
		id: "library-faruk-ondag-bi-musaade-sinavim-var",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:9907933"
	},
	{
		id: "library-a-m-celal-sengor-senin-cahilligin-benim-yasamimi-etkiliyor",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11739504"
	},
	{
		id: "library-ilber-ortayli-bir-omur-nasil-yasanir",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11240877"
	},
	{
		id: "library-ilber-ortayli-insan-gelecegini-nasil-kurar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11525210"
	},
	{
		id: "library-e-a-wallis-budge-antik-misir-edebiyati",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:30355"
	},
	{
		id: "library-serdar-tuncer-sermayem-yok-derdimden-baska",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11740103"
	},
	{
		id: "library-serdar-tuncer-hicbir-zaman-hicbir-sey",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11889594"
	},
	{
		id: "library-cahit-zarifoglu-konusmalar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11785737"
	},
	{
		id: "library-ahmed-yuksel-ozemre-uskudarda-bir-attar-dukkani",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11315830"
	},
	{
		id: "library-jeremy-stangroom-einstein-bulmacasi-2",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11991365"
	},
	{
		id: "library-jeremy-stangroom-einstein-bulmacasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11991365"
	},
	{
		id: "library-ahmet-mithat-efendi-felatun-bey-ile-rakim-efendi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11405514"
	},
	{
		id: "library-namik-kemal-intibah",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11485134"
	},
	{
		id: "library-namik-kemal-vatan-yahut-silistre",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11401989"
	},
	{
		id: "library-omer-hayyam-dortlukler-rubailer",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:67067"
	},
	{
		id: "library-yusuf-has-hacip-kutadgu-bilig",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:208828"
	},
	{
		id: "library-feriduddin-attar-mantik-al-tayr",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:290917"
	},
	{
		id: "library-tufan-gunduz-oguz-kagan-destani",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12205004"
	},
	{
		id: "library-yahya-kemal-beyatli-egil-daglar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11898516"
	},
	{
		id: "library-serkan-ozel-sicak-ayaz",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:59092"
	},
	{
		id: "library-sabahattin-ali-butun-siirleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12063607"
	},
	{
		id: "library-nazim-hikmet-henuz-vakit-varken-gulum",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:6819"
	},
	{
		id: "library-ilhan-berk-bir-yeryuzu-tanigi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:9923"
	},
	{
		id: "library-faruk-nafiz-camlibel-han-duvarlari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:267775"
	},
	{
		id: "library-cemal-sureya-sevda-sozleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11884980"
	},
	{
		id: "library-cahit-zarifoglu-yedi-guzel-adam",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11575805"
	},
	{
		id: "library-attila-ilhan-ben-sana-mecburum",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:90103"
	},
	{
		id: "library-ahmed-arif-hasretinden-prangalar-eskittim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11733752"
	},
	{
		id: "library-seyh-galip-husn-u-ask",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11950253"
	},
	{
		id: "library-james-clear-atomik-aliskanliklar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11221036"
	},
	{
		id: "library-pia-callesen-az-dusun-uzun-yasa",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11644301"
	},
	{
		id: "library-zeynep-cihangir-cankaya-serdar-cankaya-bir-aile-meselesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12081356"
	},
	{
		id: "library-karen-dolby-bir-nefeste-cinsellik-tarihi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:963602"
	},
	{
		id: "library-dogan-cuceloglu-insan-insana",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12094574"
	},
	{
		id: "library-serkan-karaismailoglu-kadin-beyni-erkek-beyni",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1020919"
	},
	{
		id: "library-nevzat-tarhan-kadin-psikolojisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12246246"
	},
	{
		id: "library-suat-taser-konusma-egitimi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11284309"
	},
	{
		id: "library-gregory-scott-brown-kendini-iyilestiren-zihin",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11994625"
	},
	{
		id: "library-sait-faik-abasiyanik-son-kuslar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11409634"
	},
	{
		id: "library-fuzuli-leyla-ve-mecnun",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:7359417"
	},
	{
		id: "library-huseyin-cahit-yalcin-mercandan-babialiye",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11914563"
	},
	{
		id: "library-huseyin-cahit-yalcin-tanidiklarim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713959"
	},
	{
		id: "library-huseyin-cahit-yalcin-kavgalarim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11323029"
	},
	{
		id: "library-ziya-gokalp-turklesmek-islamlasmak-muasirlasmak",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11393225"
	},
	{
		id: "library-ziya-gokalp-turkculugun-esaslari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11345547"
	},
	{
		id: "library-yusuf-akcura-uc-tarz-i-siyaset",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11404881"
	},
	{
		id: "library-besir-ayvazoglu-kugunun-son-sarkisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11618413"
	},
	{
		id: "library-mel-thompson-budizmin-bilgeligi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:57349"
	},
	{
		id: "library-suleyman-uludag-islam-dusuncesinin-yapisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1427019"
	},
	{
		id: "library-azizuddin-nesefi-tasavvufta-insan-meselesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:90225"
	},
	{
		id: "library-ibn-haldun-tasavvufun-mahiyeti",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:2776675"
	},
	{
		id: "library-osman-keskioglu-siyer-i-nebi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4807406"
	},
	{
		id: "library-halil-inalcik-osmanli-tarihinde-efsaneler-ve-gercekler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4341495"
	},
	{
		id: "library-cemal-kafadar-kendine-ait-bir-roma",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11433200"
	},
	{
		id: "library-cemal-kafadar-kim-var-imis-biz-burada-yog-iken",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11615477"
	},
	{
		id: "library-ilber-ortayli-osmanliyi-yeniden-kesfetmek",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11653950"
	},
	{
		id: "library-cansu-canan-ozgen-turklerin-seruveni",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4749038"
	},
	{
		id: "library-resad-ekrem-kocu-osmanli-tarihinin-panoramasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1016895"
	},
	{
		id: "library-resad-ekrem-kocu-topkapi-sarayi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1024858"
	},
	{
		id: "library-resad-ekrem-kocu-yeniceriler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1109477"
	},
	{
		id: "library-resad-ekrem-kocu-kizlaragasinin-pici",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1185531"
	},
	{
		id: "library-mehmet-yasar-ertac-kutul-amare-1916",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11253494"
	},
	{
		id: "library-george-stitt-son-mekke-emiri-serif-ali-haydar-pasa-anlatiyor",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:6300191"
	},
	{
		id: "library-ismail-kose-serif-huseyin",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:7410624"
	},
	{
		id: "library-huseyin-cahit-yalcin-talat-pasa",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:7888435"
	},
	{
		id: "library-turgut-ozakman-dirilis-canakkale-1915",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:5638011"
	},
	{
		id: "library-ilber-ortayli-yakin-tarihin-gercekleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11388888"
	},
	{
		id: "library-mustafa-naima-naima-tarihi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12110335"
	},
	{
		id: "library-erhan-afyoncu-truvanin-intikami",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12180930"
	},
	{
		id: "library-resad-ekrem-kocu-fatih-sultan-mehmed",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1024856"
	},
	{
		id: "library-ahmed-ates-istanbulun-fethine-dair",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11575594"
	},
	{
		id: "library-necmettin-alkan-sultan-ii-abdulhamid",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11697790"
	},
	{
		id: "library-ozlem-kumrular-muhtesem-suleyman",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3047663"
	},
	{
		id: "library-tufan-gunduz-kuran-ve-kilic",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12233502"
	},
	{
		id: "library-tufan-gunduz-kizilelma",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12232187"
	},
	{
		id: "library-erhan-afyoncu-askeri-isyanlar-ve-darbeler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11904517"
	},
	{
		id: "library-semavi-eyice-bizans-istanbulu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12115661"
	},
	{
		id: "library-nikolay-gogol-olu-canlar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12061813"
	},
	{
		id: "library-ivan-turgenyev-devrimden-once",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:120604"
	},
	{
		id: "library-ivan-turgenyev-babalar-ve-ogullar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:146827"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:190887"
	},
	{
		id: "library-fyodor-dostoyevski-beyaz-geceler",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11275214"
	},
	{
		id: "library-fyodor-dostoyevski-yeraltindan-notlar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:10857174"
	},
	{
		id: "library-fyodor-dostoyevski-insanciklar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11783206"
	},
	{
		id: "library-fyodor-dostoyevski-suc-ve-ceza",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:10883305"
	},
	{
		id: "library-fyodor-dostoyevski-suc-ve-ceza-ii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:133144"
	},
	{
		id: "library-fyodor-dostoyevski-suc-ve-ceza-i",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:143689"
	},
	{
		id: "library-fyodor-dostoyevski-kumarbaz",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:10857166"
	},
	{
		id: "library-lev-tolstoy-anna-karenina",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8222806"
	},
	{
		id: "library-lev-tolstoy-dirilis",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:7458059"
	},
	{
		id: "library-lev-tolstoy-haci-murat",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11487328"
	},
	{
		id: "library-lev-tolstoy-kadinin-ruh",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1132691"
	},
	{
		id: "library-lev-tolstoy-savas-ve-baris",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4280977"
	},
	{
		id: "library-lev-tolstoy-itiraflarim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11432874"
	},
	{
		id: "library-lev-tolstoy-insan-ne-ile-yasar",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3454484"
	},
	{
		id: "library-friedrich-nietzsche-insanca-pek-insanca-i",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11249449"
	},
	{
		id: "library-friedrich-nietzsche-insanca-pek-insanca-ii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11249449"
	},
	{
		id: "library-rudolf-steiner-gercek-ve-bilim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:120595"
	},
	{
		id: "library-sigmund-freud-sevgi-ve-cinsellik-uzerine",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:137455"
	},
	{
		id: "library-sigmund-freud-ruya-yorumlari-i",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:117202"
	},
	{
		id: "library-sigmund-freud-ruya-yorumlari-ii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:117202"
	},
	{
		id: "library-charlotte-bronte-jane-eyre-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4961602"
	},
	{
		id: "library-charlotte-bronte-jane-eyre-2",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4961602"
	},
	{
		id: "library-fyodor-dostoyevski-budala-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8297"
	},
	{
		id: "library-fyodor-dostoyevski-budala-2",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8297"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler-iii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11623694"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler-ii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11623694"
	},
	{
		id: "library-fyodor-dostoyevski-karamazov-kardesler-i",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11623694"
	},
	{
		id: "library-fyodor-dostoyevski-delikanli-ii",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8303"
	},
	{
		id: "library-fyodor-dostoyevski-delikanli-i",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8303"
	},
	{
		id: "library-emile-zola-meyhane-1",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12178157"
	},
	{
		id: "library-emile-zola-meyhane-2",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12178157"
	},
	{
		id: "library-yakup-kadri-karaosmanoglu-ankara",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11463364"
	},
	{
		id: "library-yakup-kadri-karaosmanoglu-yaban",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11439037"
	},
	{
		id: "library-jane-austen-emma",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11265095"
	},
	{
		id: "library-vladimir-bartol-alamut",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:36131"
	},
	{
		id: "library-marcel-proust-edebiyat-ve-sanat-yazilari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1025244"
	},
	{
		id: "library-anonim-naksebi-tutiname",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11425199"
	},
	{
		id: "library-m-yusuf-kadioglu-musluman-muhendisin-yol-haritasi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12221941"
	},
	{
		id: "library-abdulkadir-ozcan-atam-dedem-kanunu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3973859"
	},
	{
		id: "library-friedrich-nietzsche-deccal-hristiyan-karsiti",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4391415"
	},
	{
		id: "library-oguz-atay-bir-bilim-adaminin-romani-mustafa-inan",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11223160"
	},
	{
		id: "library-semsettin-sami-taassuk-i-talat-ve-fitnat",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11345545"
	},
	{
		id: "library-william-shakespeare-romeo-u-juliet",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:185182"
	},
	{
		id: "library-mevlana-mesnevi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11813655"
	},
	{
		id: "library-ahmet-faik-ozbilge-fener-balat-ayvansaray",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12158487"
	},
	{
		id: "library-ahmet-hamdi-tanpinar-19-asir-turk-edebiyati-tarihi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:208891"
	},
	{
		id: "library-anonim-kerem-ile-asli-hikayesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11415636"
	},
	{
		id: "library-cenap-sahabettin-avrupa-mektuplari",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11457207"
	},
	{
		id: "library-donald-a-mackenzie-babil-ve-asur-mitleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11904749"
	},
	{
		id: "library-gustave-le-bon-devrim-psikolojisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11342433"
	},
	{
		id: "library-ismail-hakki-aydin-vecizelerim",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12271506"
	},
	{
		id: "library-neval-el-seddavi-sifir-noktasindaki-kadin",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11711429"
	},
	{
		id: "library-paulo-coelho-mektup",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11761360"
	},
	{
		id: "library-ramazan-korkmaz-yeni-turk-edebiyati-1839-2000",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:140018"
	},
	{
		id: "library-sezai-karakoc-islamin-vadettikleri",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11360654"
	},
	{
		id: "library-sigmund-freud-gunluk-hayatin-psikopatolojisi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12117642"
	},
	{
		id: "library-turgut-ozakman-cumhuriyet-1922-1938",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:121413"
	},
	{
		id: "library-yasar-kemal-agri-dagi-efsanesi",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:92931"
	},
	{
		id: "library-yekta-sarac-klasik-edebiyat-bilgisi-bicim-olcu-kafiye",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11568167"
	},
	{
		id: "library-turk-dil-kurumu-yeni-tarama-sozlugu",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:285612"
	},
	{
		id: "library-anonim-mizrakli-ilmihal-tercumesi",
		url: "https://www.ahiskayayinevi.com/mizrakli-ilmihal-tercumesi-fikih-kurulu-fikih-ilmihal-kitapkalbi-yayincilik-husamettin-vanlioglu-abdullah-hicdonmez-emin-ali-24016-13-O.webp"
	},
	{
		id: "library-hamid-aytac-kuran-i-kerim",
		url: "https://cdn.myikas.com/images/248e4ee3-629b-46fe-abbc-8a0f7d8fe1f0/f84c9112-4c40-4981-b7d1-25cf9e43b88e/1080/1262y-1.webp"
	},
	{
		id: "library-kurani-kerimin-turkce-meali-alisi-718811",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12059988"
	},
	{
		id: "library-kuran-meali-711584",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12178553"
	},
	{
		id: "library-fatiha-tefsiri-aciklamali-tahsiyeli-lugatce-ilaveli-747010",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12181585"
	},
	{
		id: "library-kuranin-ozu-cevahirulkuran-687779",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11984127"
	},
	{
		id: "library-yedi-ayet-yedi-sahsiyet-fatiha-suresi-tefsiri-694355",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11945807"
	},
	{
		id: "library-kuranin-kalbine-yolculuk-yasin-suresi-tefsiri-540910",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11918262"
	},
	{
		id: "library-keske-dememek-icin-kuranda-keskeler-ve-keske-diyenler-738420",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12139944"
	},
	{
		id: "library-ehli-sunnet-akaidi-nesefi-akidesi-serhi-504474",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8827653"
	},
	{
		id: "library-buyuk-islam-ilmihali-ciltli-606944",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12052067"
	},
	{
		id: "library-riyazus-salihin-salihler-bahcesi-ithal-kagitkarton-kapak-328771",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11783906"
	},
	{
		id: "library-kainatin-efendisi-peygamberimizin-hayati-tek-cilt-252777",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11588056"
	},
	{
		id: "library-kendini-aldatan-insan-630916",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12260328"
	},
	{
		id: "library-dusunmenin-dogru-olcusu-elkistasulmustakim-660918",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12269465"
	},
	{
		id: "library-hakikat-arayisi-elmunkiz-mineddalal-565614",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12035788"
	},
	{
		id: "library-dil-belasi-dilin-afetleri-kitabu-afatillisan-747009",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12262166"
	},
	{
		id: "library-insan-nasil-insan-oldu-elfusul-filesile-velecvibe-637295",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12175851"
	},
	{
		id: "library-hakikat-cagrisi-ey-ogul-eyyuhelveled-ledunni-ilim-risalesi-537248",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11543556"
	},
	{
		id: "library-en-guzel-isimler-elmaksadulesna-fi-serhi-esmaillahilhusna-625053",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12231067"
	},
	{
		id: "library-gokyuzune-bakmanin-faydalari-321327",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11656891"
	},
	{
		id: "library-kirk-hadis-398941",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1205978"
	},
	{
		id: "library-ibn-sina-hayy-bin-yakzan-kesifler-329562",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11305260"
	},
	{
		id: "library-imami-azamin-bes-eseri-50132",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11886976"
	},
	{
		id: "library-cambridge-turkiye-tarihi-1-bizanstan-turkiyeye-10711453-karton-kapak-735273",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12208897"
	},
	{
		id: "library-devleti-aliyye-osmanli-imparatorlugu-uzerine-arastirmalar-i-131082",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:7053526"
	},
	{
		id: "library-osmanli-savasirken-655804",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11752802"
	},
	{
		id: "library-osmanli-imparatorlugu-13001650-632294",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11632586"
	},
	{
		id: "library-barut-top-ve-tufek-osmanli-imparatorlugunda-askeri-guc-ve-silah-sanayisi-640230",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11668944"
	},
	{
		id: "library-osmanliturkiye-iktisadi-tarihi-15001914-73654",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11343655"
	},
	{
		id: "library-osmanli-imparatorlugunda-paranin-tarihi-424445",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3683985"
	},
	{
		id: "library-bir-felsefe-risalesi-sultan-abdulaziz-hanin-hikmet-ve-mantik-bahislerine-dair-bir-serhi-758420",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12248150"
	},
	{
		id: "library-sultan-abdulhamid-279760",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:72132"
	},
	{
		id: "library-hacilar-ve-sultanlar-osmanli-doneminde-hac-15171638-673565",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11843422"
	},
	{
		id: "library-osmanli-toplumunda-aile-451519",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11320636"
	},
	{
		id: "library-fatih-devri-uzerinde-tetkikler-ve-vesikalar-1-ciltli-582037",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11416924"
	},
	{
		id: "library-candarli-vezir-ailesi-22b7-606633",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11513361"
	},
	{
		id: "library-osmanlida-strateji-ve-askeri-guc-267989",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12100231"
	},
	{
		id: "library-osmanli-imparatorlugunun-kurulus-ve-yukselis-tarihi-13001600-380476",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1124375"
	},
	{
		id: "library-osmanli-imparatorlugu-klasik-cag-13001600-501208",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8634554"
	},
	{
		id: "library-osmanli-devleti-tarihi-netayicul-vukuat-olaylarin-sonuclari-cilt-iiv-708391",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12011503"
	},
	{
		id: "library-fatihin-tarihi-tarihi-ebulfeth-343183",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11922271"
	},
	{
		id: "library-osmanli-kadin-hareketi-5871",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11960837"
	},
	{
		id: "library-seriat-ile-kanun-arasinda-ebussuud-efendi-607812",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11518899"
	},
	{
		id: "library-iki-cihan-aresinde-502785",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11424991"
	},
	{
		id: "library-osmanli-ilmiyesi-ciltli-569791",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11818525"
	},
	{
		id: "library-osmanlilar-futuhat-imparatorluk-avrupa-ile-iliskiler-634474",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11641207"
	},
	{
		id: "library-asik-pasazade-osmanogullarinin-tarihi-ciltli-742950",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12162380"
	},
	{
		id: "library-babam-sultan-abdulhamid-315783",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1138493"
	},
	{
		id: "library-turk-tarihi-sultan-fatihin-sarayinda-bir-esir-giovanni-maria-angiolello-gozunden-604831",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11504538"
	},
	{
		id: "library-bir-yenicerinin-hatiralari-307682",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11862596"
	},
	{
		id: "library-bir-osmanli-askerinin-hatirati-16881700-esaretten-kacis-365372",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12228008"
	},
	{
		id: "library-roma-savas-sanati-510766",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11818521"
	},
	{
		id: "library-justinyen-imparator-asker-aziz-719872",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12064230"
	},
	{
		id: "library-bizansli-gozuyle-turkler-136818",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11922270"
	},
	{
		id: "library-bir-sehir-kurmak-turgut-canseverle-konusmalar-381773",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:4576017"
	},
	{
		id: "library-tanzimat-degisim-surecinde-osmanli-imparatorlugu-257767",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:14431"
	},
	{
		id: "library-davetsiz-misafirler-osmanli-cokerken-amerikan-misyonerleri-722342",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12073950"
	},
	{
		id: "library-sultan-ii-abdulhamid-ve-jon-turkler-18891908-selanikin-yukselisi-735994",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12130854"
	},
	{
		id: "library-imparatorlugun-son-savasi-birinci-dunya-savasina-neden-ve-nasil-girdik-563570",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11316226"
	},
	{
		id: "library-turkiye-selcuklularinda-hukumet-vezir-ve-divan-538574",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11198699"
	},
	{
		id: "library-turkistan-halklarinin-tarihi-482177",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:7394092"
	},
	{
		id: "library-turk-mitolojisi-iiicilt-takim-556120",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11279331"
	},
	{
		id: "library-son-kizilbas-sah-ismail-244032",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12184460"
	},
	{
		id: "library-selcuklular-zamaninda-turkiye-62913",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11463371"
	},
	{
		id: "library-fetih-suresi-tefsiri-151319",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:57980"
	},
	{
		id: "library-elmalili-hamdi-yazir-ihlas-suresi-tefsiri-387631",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1142643"
	},
	{
		id: "library-hizbulbahr-serhi-748863",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12194390"
	},
	{
		id: "library-aciklamali-delailulhayrat-salavati-serifler-70598",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:135354"
	},
	{
		id: "library-osmanli-tarihinde-islamiyet-ve-devlet-396753",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:7053613"
	},
	{
		id: "library-turk-mektuplari-kanuni-doneminde-avrupali-bir-elcinin-gozlemleri-257775",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:16466"
	},
	{
		id: "library-ayasofya-fleksi-kapak-624945",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11596787"
	},
	{
		id: "library-iste-onderimiz-hz-muhammed-18361",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11397676"
	},
	{
		id: "library-bir-darbenin-anatomisi-13641",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11535716"
	},
	{
		id: "library-yilmaz-oztuna-avrupa-turkiyesini-kaybimiz",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11438214"
	},
	{
		id: "library-ii-abdulhamid-zamani-ve-sahsiyeti-311444",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11631173"
	},
	{
		id: "library-sultan-ii-mahmud-342725",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:264011"
	},
	{
		id: "library-kanuni-sultan-suleyman-335517",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11638981"
	},
	{
		id: "library-yasin-mulk-ve-nebe-tefsiri-aciklamali-tahsiyeli-lugatce-ilaveli-747016",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12181592"
	},
	{
		id: "library-fatihin-enderun-mektebi-758156",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12246498"
	},
	{
		id: "library-kayip-cografyanin-izinde-dogu-turkistan-seyahatnamesi-731499",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12258157"
	},
	{
		id: "library-islam-bilim-gelenegi-avrupayi-nasil-aydinlatti-ortacagda-bilimsel-dusuncenin-yukselisi-ve-dususu-736481",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12132765"
	},
	{
			id: "media-youtube-cdf6d19etmc",
			url: "https://img.youtube.com/vi/Cdf6D19Etmc/hqdefault.jpg"
		},
	{
			id: "media-youtube--gc2twgghfa",
			url: "https://img.youtube.com/vi/-Gc2twGGHFA/hqdefault.jpg"
		},
	{
			id: "media-youtube-rs8xja8ctoq",
			url: "https://img.youtube.com/vi/rs8xJa8ctOQ/hqdefault.jpg"
		},
	{
			id: "media-youtube-6ey6xucwf0y",
			url: "https://img.youtube.com/vi/6Ey6xUCWF0Y/hqdefault.jpg"
		},
	{
			id: "media-youtube-5x2yp2wm16i",
			url: "https://img.youtube.com/vi/5X2yp2Wm16I/hqdefault.jpg"
		},
	{
			id: "media-youtube-hvmbmwuheaw",
			url: "https://img.youtube.com/vi/HVmbMWUhEaw/hqdefault.jpg"
		},
	{
			id: "media-youtube-m22nwszycce",
			url: "https://img.youtube.com/vi/M22nWSzyccE/hqdefault.jpg"
		},
	{
			id: "media-youtube-lmwpop3pulg",
			url: "https://img.youtube.com/vi/LmwPop3Pulg/hqdefault.jpg"
		},
	{
			id: "media-youtube-4rpm6g6odvg",
			url: "https://img.youtube.com/vi/4RPm6g6odVg/hqdefault.jpg"
		},
	{
			id: "media-youtube-ueec_ebjgfu",
			url: "https://img.youtube.com/vi/UEec_EbJgfU/hqdefault.jpg"
		},
	{
			id: "media-youtube-x7158uqk1yi",
			url: "https://img.youtube.com/vi/X7158uQk1yI/hqdefault.jpg"
		},
	{
			id: "media-youtube-u1oivnfpfii",
			url: "https://img.youtube.com/vi/u1oivnfpfII/hqdefault.jpg"
		},
	{
			id: "media-youtube-81txboyjrjw",
			url: "https://img.youtube.com/vi/81tXbOYJRJw/hqdefault.jpg"
		},
	{
			id: "media-youtube-mhsg2m25pzy",
			url: "https://img.youtube.com/vi/mHsg2M25PzY/hqdefault.jpg"
		},
	{
			id: "media-youtube-g-swvee9him",
			url: "https://img.youtube.com/vi/g-swVEE9hiM/hqdefault.jpg"
		},
	{
			id: "media-youtube-uo1chltdryq",
			url: "https://img.youtube.com/vi/uo1chlTDrYQ/hqdefault.jpg"
		},
	{
			id: "media-youtube-jqvx5i4cso8",
			url: "https://img.youtube.com/vi/JqVx5I4CsO8/hqdefault.jpg"
		},
	{
			id: "media-youtube-pxygbwx4dks",
			url: "https://img.youtube.com/vi/pXyGBwx4dks/hqdefault.jpg"
		},
	{
			id: "media-youtube-ijbde6pkw2o",
			url: "https://img.youtube.com/vi/iJbDE6PKW2o/hqdefault.jpg"
		},
	{
			id: "media-youtube-fexzy4evllo",
			url: "https://img.youtube.com/vi/FeXZY4eVLlo/hqdefault.jpg"
		},
	{
	if (
		id.startsWith("library-") ||
		id.startsWith("personal-imdb-com-title-") ||
		id.includes("npmjs-com-package")
	) {
		return "contain"
	}

	return "cover"
},
	{
	return id.startsWith("library-") ? librarySize : defaultSize
},
	{
	const response = await fetch(url, {
		headers: {
			"User-Agent": "omergulcicek.com bookmark image sync"
		},
		redirect: "follow"
	})

	if (!response.ok) {
		throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`)
	}

	return Buffer.from(await response.arrayBuffer())
},
	{ id, url },
	{
	const fit = getFitMode(id)
	const size = getImageSize(id)
	const outputPath = path.join(outputDir, `${id}.webp`)
	const input = await downloadImage(url)

	const pipeline = sharp(input).resize(size, size, {
		fit,
		background: { r: 0, g: 0, b: 0, alpha: 0 }
	})

	await pipeline.webp({ quality: 86, effort: 4 }).toFile(outputPath)

	const { size: bytes } = await readFile(outputPath).then((buffer) => ({
		size: buffer.byteLength
	}))

	console.log(`${id}.webp (${bytes} bytes, ${size}px, ${fit})`)
},
	{
	const entries = await readdir(outputDir, { withFileTypes: true })

	await Promise.all(
		entries
			.filter((entry) => entry.isFile() && entry.name.endsWith(".webp"))
			.map((entry) => unlink(path.join(outputDir, entry.name)))
	)
}
]

	for (const bookmarkImage of images) {
		try {
			await writeBookmarkImage(bookmarkImage)
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error)
			failures.push({ id: bookmarkImage.id, message })
			console.error(`${bookmarkImage.id}: ${message}`)
		}
	}

	if (failures.length > 0) {
		throw new Error(`Failed to sync ${failures.length} bookmark image(s)`)
	}
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
