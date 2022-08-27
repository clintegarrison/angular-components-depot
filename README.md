# AngularComponentsDepot

This project is an example of how to share Angular components between applicaitons.  This is accomplished by using a library, distributed via npmJS.  Discoverablity of components is accomplished by implementing Storybook.

## Steps to recreate this solution

1. `ng new angular-components-depot` creates the Angular project
2. `npx -p @storybook/cli sb init --type angular` creates the Storybook instance
3. `ng generate library angular-components-depot-library` creates the library
4. Manually move the default componenets from Storybook to the library
5. Create an account on Chromatic (Storybook hosting site)
6. `npm install --save-dev chromatic` install Chromatic
7. `npx chromatic --project-token=XXXXXXXXXX` publish Storybook
8. Setup GitHub workflow to publish on each commit

## Running Storybook locally
`npm run storybook`