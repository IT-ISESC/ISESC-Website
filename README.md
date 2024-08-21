# Starting

To start working on this project, run the commands below in your terminal after you have cloned the repo to your local machine. Once done, use [localhost:5173](http://localhost:5173/) to run it on your machine.

```bash
npm install
npm run dev
```

# Development
## General development
**Here are some pointers to get started developing:**
1. Check the current work assigned in the `Issues tab`.
2. The `Projects tab` shows the work progress as well as the roadmap for our work.

## Project Structure
1. The `lib` folder is for your assets such as your images, components, css files, or script files.
2. The `routes` folder is for your pages. To make a new page at `http://localhost:5173/new-page` you would make this: `routes/new-page/+page.svelte`.
3. Create a new component in `lib/components/ui/componentName.svelte` and import it using `import componentName from '$lib/components/ui/componentName.svelte';`.
4. Images should be stored in `lib/assets/pageName/image.svg`.
