# Contributing to IndieUI

We are grateful for your enthusiasm in wanting to contribute to IndieUI! Your assistance means a lot to us, and we eagerly await your input. This manual will assist you in comprehending the layout of the file system and will give you thorough directions on how to incorporate a new element into IndieUI.

## Repository setup

1. Fork this repository
   Click [here](https://github.com/Ali-Hussein-dev/indie-ui/fork) to fork the repository.

2. Clone your forked repository to your local machine

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/indie-ui.git
    ```

3. Change the directory to the cloned repository:

4. ```bash
   cd indie-ui
   ```

5. Create a new branch for your changes:

    ```bash
   git checkout -b feat/component-name
   ```

6. Install the dependencies:

    ```bash
   pnpm install
   ```

7. Run the development server:

    ```bash
   pnpm dev
   ```

Open [localhost](http://localhost:3000) with your browser to see the result.

## Adding a New Component

Describe the contribution you would like to make in an issue before creating a pull request. so that we can discuss it and provide feedback. Once you have received approval, you need to change 3 files to add a new component:

- Add UI component to the `src/components/` directory.
- Add UI component to the docus `content/docs/`
- Showcase the component in the `src/pages/index.tsx` file.

If it is a new category, you need to update the following files:

- Modify the `source.ts` file to add the new category.
- Add a new file to the `content/docs/[category]/[name].mdx` directory.

### Style Guide

- Use black/white color scheme by default
- Use other colors only when the color make a new variant of the component.

### Commit Messages

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Discuss Your Ideas

If you have any ideas or suggestions, please feel free to discuss it in [GitHub Discussion Section](https://github.com/Ali-Hussein-dev/indie-ui/discussions)
