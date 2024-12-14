## Search Form

Il faut indiquer à next que les images de toutes sources sont ok dans next.config.ts : 
``images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  }``

``<Link href={`/startup/${authorId}`}>
    <Image src="https://placehold.co/48x48" alt="placeholder" className="rounded-full" width={48} height={48}></Image>
</Link>``

## Sanity

https://www.sanity.io/

- On peut construire une OS avec leurs APIs. C'est plus qu'un lowcode/nocode
- Bien avec Next, Vercel ...

### Commandes

- npm create sanity@latest -- --project oc6t30x7 --dataset production --template clean

? Select project to use YC Directory [oc6t30x7]
? Select dataset to use production
? Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
? Do you want to use TypeScript? Yes
? Would you like an embedded Sanity Studio? Yes
? What route do you want to use for the Studio? /studio
? Select project template to use Clean project with no predefined schema types    
? Would you like to add the project ID and dataset to your .env.local file? Yes

Pour utiliser les APIs :
- npm i next-sanity@canary

## Sanity Schema

Preview dans author.ts sert à selectionner les authors par name.

Structure.ts => on peut lister des choses que sanity nous offre.

npm install sanity-plugin-markdown

## Fetcher nos données de Sanity

Extraire les données : npx sanity@latest schema extract --path=./sanity/extract.json

Après avoir complété le fichier sanity-typegen.json : 

npx sanity@latest typegen generate.

Pour ne pas avoir à refaire le npx, on peut ajouter une commande dans la e package.json : 
"typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate"

Il suffira plus qu'à faire npm run typegen

## Live Data

Un module peut uniquement être utilsié dans un comp server : 
npm i server-only

## Details page

On va utiliser le PPR ici

npm i markdown-it
npx shadcn@latest add skeleton

## Créer sa propre startup

npx shadcn@latest add input textarea toast

MD editor :
npm i @uiw/react-md-editor

npm i slugify

## bug tracking & performance
npx @sentry/wizard@latest -i nextjs --saas --org vid-cbiango --project yc-directory 

## user section

