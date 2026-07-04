import { mkdir, readdir, readFile, unlink } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outputDir = path.join(rootDir, "public/img/bookmarks")
const size = 120

const bookmarkImages = [
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
			url: "https://square.lndev.me/banner.png"
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
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11457356/wh:b5e5e32bc/miw:200/mih:200"
	},
	{
		id: "library-osmanlilar-kulturel-tarih-460636",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:5906393/wh:1ebaec74c/miw:200/mih:200"
	},
	{
		id: "library-avrupanin-fethi-osmanli-cihana-nasil-hukmetti-701864",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11979507/wh:a3f46feed/miw:200/mih:200"
	},
	{
		id: "library-biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli-80245",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11981534/wh:36e21e5ee/miw:200/mih:200"
	},
	{
		id: "library-imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti-582119",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11416782/wh:95bd86136/miw:200/mih:200"
	},
	{
		id: "library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12051926/wh:6894a8f1f/miw:200/mih:200"
	},
	{
		id: "library-yavuz-sultan-selim-324084",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1032341/wh:6219d0f5a/miw:200/mih:200"
	},
	{
		id: "library-muhtesem-suleyman-415302",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3047663/wh:f4af4255e/miw:200/mih:200"
	},
	{
		id: "library-bektasilik-710982",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12023603/wh:4289ac1e4/miw:200/mih:200"
	},
	{
		id: "library-futuhul-gayb-alemlerin-kesfi-487377",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11889480/wh:9dcdfdc4b/miw:200/mih:200"
	},
	{
		id: "library-uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari-620987",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11582568/wh:3ce998c87/miw:200/mih:200"
	},
	{
		id: "library-bu-dunya-icin-yaratilmadin-641708",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11676182/wh:6b9330bf5/miw:200/mih:200"
	},
	{
		id: "library-son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi-721477",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12071671/wh:2056b044e/miw:200/mih:200"
	},
	{
		id: "library-itikadin-muhafizlari-osmanlilar-689752",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11922587/wh:986903d42/miw:200/mih:200"
	},
	{
		id: "library-iskendersezar-paralel-hayatlar-karton-kapak-371513",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1034455/wh:45aff2383/miw:200/mih:200"
	},
	{
		id: "library-spqr-antik-roma-tarihi-449296",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12211537/wh:f39febb1c/miw:200/mih:200"
	},
	{
		id: "library-zeytindagi-gunumuz-turkcesiyle-668164",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12226528/wh:d296a6f4b/miw:200/mih:200"
	},
	{
		id: "library-ataturkun-hatiralari-524510",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11799403/wh:af5aadfcd/miw:200/mih:200"
	},
	{
		id: "library-sair-fatih-avni-150920",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:57935/wh:b6be96332/miw:200/mih:200"
	},
	{
		id: "library-surname-bir-osmanli-macerasi-631391",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11683118/wh:3d12c8b43/miw:200/mih:200"
	},
	{
		id: "library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1107209/wh:fac73eaad/miw:200/mih:200"
	},
	{
		id: "library-osmanli-turkcesi-kilavuzu1-106297",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11526910/wh:bc79f9b22/miw:200/mih:200"
	},
	{
		id: "library-yavuz-sultan-selim-401713",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12239915/wh:dcbffc266/miw:200/mih:200"
	},
	{
		id: "library-fetih-ve-kiyamet-1453-595100",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11462556/wh:e486a4262/miw:200/mih:200"
	},
	{
		id: "library-yeni-roma-dogudaki-roma-imparatorlugu-395700-642279",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11679662/wh:0f41ffedf/miw:200/mih:200"
	},
	{
		id: "library-buyuk-konstantin-yenilmez-imparator-705347",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11996760/wh:6bbab44a6/miw:200/mih:200"
	},
	{
		id: "library-antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa-701428",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11976907/wh:f3868da0c/miw:200/mih:200"
	},
	{
		id: "library-fihi-ma-fih-mevlananin-konusma-ve-sohbetleri-461625",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11328119/wh:d6284aa0c/miw:200/mih:200"
	},
	{
		id: "library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11930676/wh:8f1e0d2f8/miw:200/mih:200"
	},
	{
		id: "library-dersaadette-bayram-sabahlari-509826",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:9334068/wh:85c78035a/miw:200/mih:200"
	},
	{
		id: "library-40-pratik-sunnet-599358",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11480197/wh:a89446754/miw:200/mih:200"
	},
	{
		id: "library-japon-savas-sanati-busido-396401",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11731012/wh:f9fa6670d/miw:200/mih:200"
	},
	{
		id: "library-fatih-sultan-mehmed-717193",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12054898/wh:349630d13/miw:200/mih:200"
	},
	{
		id: "library-turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm-471959",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11475849/wh:44925e365/miw:200/mih:200"
	},
	{
		id: "library-cumhuriyetin-tarihi-58230",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11767585/wh:30be849f1/miw:200/mih:200"
	},
	{
		id: "library-islam-dusuncesi-551964",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11901366/wh:cd05e8b4e/miw:200/mih:200"
	},
	{
		id: "library-islamin-vadettikleri-467400",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11360654/wh:6176ff880/miw:200/mih:200"
	},
	{
		id: "library-insanligin-medeniyet-destani-461827",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11328118/wh:ff40ad8d4/miw:200/mih:200"
	},
	{
		id: "library-omuzlarimda-dunya-hikayem-hayatimdir-572093",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11628993/wh:02ade49b2/miw:200/mih:200"
	},
	{
		id: "library-soyle-bana-hindiba-549240",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11628994/wh:a37e5810e/miw:200/mih:200"
	},
	{
		id: "library-ayasofyanin-gizli-tarihi-386572",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11297866/wh:a566c7ad1/miw:200/mih:200"
	},
	{
		id: "library-bir-cihan-hukumdari-fatih-sultan-mehmed-455566",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12178902/wh:66ba8150b/miw:200/mih:200"
	},
	{
		id: "library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12143309/wh:862bf7838/miw:200/mih:200"
	},
	{
		id: "library-medine-mudafaasi-col-kaplani-fahrettin-pasa-88173",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11361645/wh:2e0006e60/miw:200/mih:200"
	},
	{
		id: "library-sarikamisbeyaz-huzun-75913",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11974062/wh:98e0180ca/miw:200/mih:200"
	},
	{
		id: "library-yasamak-618603",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11967882/wh:ad4eac1be/miw:200/mih:200"
	},
	{
		id: "library-bu-ulke-18263",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11460549/wh:5427e9d55/miw:200/mih:200"
	},
	{
		id: "library-bes-sehir-4787",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1106424/wh:55bd360ef/miw:200/mih:200"
	},
	{
		id: "library-muslumanca-dusunme-uzerine-denemeler-727",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11772007/wh:6802a6d04/miw:200/mih:200"
	},
	{
		id: "library-gul-yetistiren-adam-488",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11708603/wh:7bbe9f081/miw:200/mih:200"
	},
	{
		id: "library-turkiyenin-maarif-davasi-4879",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11811709/wh:15f7859e2/miw:200/mih:200"
	},
	{
		id: "library-dogu-bati-arasinda-islam-495562",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11525884/wh:7d6d4ad87/miw:200/mih:200"
	},
	{
		id: "library-sir-4798",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11866917/wh:0c07ac95f/miw:200/mih:200"
	},
	{
		id: "library-ya-tahammul-ya-sefer-4801",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:285160/wh:b82630e46/miw:200/mih:200"
	},
	{
		id: "library-yoksulluk-icimizde-4775",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:6376052/wh:48f8f0287/miw:200/mih:200"
	},
	{
		id: "library-uzun-hikaye-19088",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11956818/wh:3fca019d5/miw:200/mih:200"
	},
	{
		id: "library-bu-boyledir-4776",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:111182/wh:386831298/miw:200/mih:200"
	},
	{
		id: "library-dirilis-neslinin-amentusu-6522",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12191479/wh:1c2655a36/miw:200/mih:200"
	},
	{
		id: "library-yitik-cennet-6384",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12174782/wh:a0f2ca4f9/miw:200/mih:200"
	},
	{
		id: "library-ideolocya-orgusu-kod36-1099",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3141465/wh:a98a6706f/miw:200/mih:200"
	},
	{
		id: "library-cole-inen-nur-kod39-1102",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3103031/wh:980955f3f/miw:200/mih:200"
	},
	{
		id: "library-okumak-nedir-663010",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11787652/wh:149d6cec5/miw:200/mih:200"
	},
	{
		id: "library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11849114/wh:54a0ede95/miw:200/mih:200"
	},
	{
		id: "library-askin-gozyaslari-4-hamus-olumu-open-dervis-305588",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:49534/wh:b3be37f52/miw:200/mih:200"
	},
	{
		id: "library-askin-gozyaslari-2-hz-mevlana-408175",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12131044/wh:45e91a1d7/miw:200/mih:200"
	},
	{
		id: "library-askin-gozyaslari-1-sems-tebrizi-408363",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12164186/wh:4b5d2cc40/miw:200/mih:200"
	},
	{
		id: "library-tennure-ve-ates-hz-mevlana-karton-kapak-240852",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:192507/wh:24b6248cf/miw:200/mih:200"
	},
	{
		id: "library-kesintisiz-ogrenme-42711",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11914721/wh:8cf4eaaf4/miw:200/mih:200"
	},
	{
		id: "library-piyon-321683",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:149293/wh:0a516d426/miw:200/mih:200"
	},
	{
		id: "library-od-261783",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12244434/wh:2097f5b80/miw:200/mih:200"
	},
	{
		id: "library-allah-de-otesini-birak-311263",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11364712/wh:c53c23dd8/miw:200/mih:200"
	},
	{
		id: "library-kusatma-1453-130135",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:1126360/wh:9a5f42cc7/miw:200/mih:200"
	},
	{
		id: "library-sadece-aptallar-8-saat-uyur-81650",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11374907/wh:4e564a431/miw:200/mih:200"
	},
	{
		id: "library-hemdem-kalpten-kalbe-bir-yol-vardir-677801",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11866093/wh:3b945f5ff/miw:200/mih:200"
	},
	{
		id: "library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:3164442/wh:dbda2d21a/miw:200/mih:200"
	},
	{
		id: "library-59-yuz-portreler-457862",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:5764123/wh:d63f96a3f/miw:200/mih:200"
	},
	{
		id: "library-fabrika-ayari-528784",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11948965/wh:979390aba/miw:200/mih:200"
	},
	{
		id: "library-japonizm-ciltli-499470",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:8538776/wh:5c4b711dc/miw:200/mih:200"
	},
	{
		id: "library-islamin-dirilisi-6514",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12191484/wh:292500cf6/miw:200/mih:200"
	},
	{
		id: "library-insanligin-dirilisi-6385",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12191487/wh:ba69ef2cb/miw:200/mih:200"
	},
	{
		id: "library-kanuni-sultan-suleyman-335517",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11638981/wh:afe3ff5bb/miw:200/mih:200"
	},
	{
		id: "library-yavuz-sultan-selim-430261",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:12218970/wh:1b563423c/miw:200/mih:200"
	},
	{
		id: "library-ii-abdulhamid-zamani-ve-sahsiyeti-311444",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11631173/wh:8f0cfd3f9/miw:200/mih:200"
	},
	{
		id: "library-sultan-ii-mahmud-342725",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:264011/wh:62e4fc0e9/miw:200/mih:200"
	},
	{
		id: "library-bir-darbenin-anatomisi-13641",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11535716/wh:f8eb431ef/miw:200/mih:200"
	},
	{
		id: "library-bozkurtlar-243385",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11690531/wh:dfc9e7ea3/miw:200/mih:200"
	},
	{
		id: "library-turancilik-milli-degerler-ve-genclik-251503",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11630535/wh:9f05df551/miw:200/mih:200"
	},
	{
		id: "library-turk-tarihinde-meseleler-246740",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11484359/wh:db2bfb821/miw:200/mih:200"
	},
	{
		id: "library-yollarin-sonu-595418",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713972/wh:bbc940800/miw:200/mih:200"
	},
	{
		id: "library-turk-ulkusu-251501",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11691811/wh:60c0fe5d6/miw:200/mih:200"
	},
	{
		id: "library-deli-kurt-243383",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11784528/wh:17149e98c/miw:200/mih:200"
	},
	{
		id: "library-ruh-adam-588450",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11713962/wh:0d4532277/miw:200/mih:200"
	},
	{
		id: "library-atsiz-hikayeler-452636",
		url: "https://img.kitapyurdu.com/v1/getImage/fn:11637963/wh:9a989e632/miw:200/mih:200"
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
		}
]

function getFitMode(id) {
	if (
		id.startsWith("library-") ||
		id.startsWith("personal-imdb-com-title-") ||
		id.includes("npmjs-com-package")
	) {
		return "contain"
	}

	return "cover"
}

async function downloadImage(url) {
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
}

async function writeBookmarkImage({ id, url }) {
	const fit = getFitMode(id)
	const outputPath = path.join(outputDir, `${id}.webp`)
	const input = await downloadImage(url)

	const pipeline = sharp(input).resize(size, size, {
		fit,
		background: { r: 0, g: 0, b: 0, alpha: 0 }
	})

	await pipeline.webp({ quality: 82, effort: 4 }).toFile(outputPath)

	const { size: bytes } = await readFile(outputPath).then((buffer) => ({
		size: buffer.byteLength
	}))

	console.log(`${id}.webp (${bytes} bytes, ${fit})`)
}

async function clearBookmarkImages() {
	const entries = await readdir(outputDir, { withFileTypes: true })

	await Promise.all(
		entries
			.filter((entry) => entry.isFile() && entry.name.endsWith(".webp"))
			.map((entry) => unlink(path.join(outputDir, entry.name)))
	)
}

async function main() {
	await mkdir(outputDir, { recursive: true })
	await clearBookmarkImages()
	const failures = []

	for (const bookmarkImage of bookmarkImages) {
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
