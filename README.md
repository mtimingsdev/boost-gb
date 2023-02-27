# Blackhawk Network - BigCommerce "Boost" Theme

## TABLE OF CONTENTS

* [REQUIREMENTS](#markdown-header-requirements)
* [APPLICATION TECHNOLOGY STACK](#markdown-header-application-technology-stack)
* [LOCAL DEVELOPMENT](#markdown-header-local-development)
  * [TESTING](#markdown-header-test-suite)
  * [FRONT-END BUILD SYSTEM](#markdown-header-front-end-build-system)
* [DEPLOYMENT](#markdown-header-deployment)
  * [STAGING](#markdown-header-staging)
  * [PRODUCTION](#markdown-header-production)
* [RESOURCES](#markdown-header-resources)

----

### REQUIREMENTS

* node 10.16
* [stencil-cli](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/installing-stencil)

## APPLICATION TECHNOLOGY STACK

* Stencil
* BigCommerce
* JQuery
* Handlebars
* Front Matter
* WebPack

## LOCAL DEVELOPMENT

BigCommerce provide their own theme development system called Stencil which allows you to run the site theme locally while viewing live data from the real site.  This means you can adjust the files locally, refresh the page and see the changes straight away, all without affecting the theme on the live site.

The theme itself consists of several template .html files that use Handlebars for variable substitution and page flow logic.  JQuery is the JavaScript library.

### TESTING

TBA

### FRONT-END BUILD SYSTEM

To setup the project locally for the first time is a three step process:

1. [Install stencil-cli](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/installing-stencil) and it's prerequisites.  Ignore the section about "Live Previewing A Theme".
2. [Clone the BHN theme from the repo.](https://bitbucket.org/CyberDuck/blackhawk-network-bigcommerce-theme/src/master/)
3. Inside the theme root directory run `npm install` to install the theme modules.

To work on the theme:

1. Run `stencil start` in the theme root directory.
2. Visit [http://localhost:3001](http://localhost:3001) to view the local copy of the theme.
3. Stencil uses [Browsersync](https://github.com/bigcommerce/browser-sync) to ensure that when you make a change to the source files, the page you have open in your browser will automatically update to show the changes.
4. Browsersync does not work with all browsers and even on those that it does work with you will find that not all changes are reflected in which case just do a normal page refresh.

## DEPLOYMENT

### Staging

1. When you have finished making changes then commit them to the repo as a new feature branch.
2. Create a PR that targets the latest release candidate.
3. When that release candidate is ready for testing then the repo owner or somebody they designate should clone it locally and run `stencil bundle` to generate a new theme zip file.
4. [Go to Storefront/My Themes on the Staging site](https://store-9r8k8h2nhs.mybigcommerce.com/manage/storefront-manager/my-themes), click the `Upload Theme` button and select the new theme zip file.  This will upload the theme and make it available in the My Themes section.
5. Rename the current theme to "Boost (Previous Version)" and rename the new theme to "Boost"
6. Open the menu on the newly updated theme and select `Apply` to make this the new active theme.
7. Begin QA process.

### Production

1. Create a PR for the release candidate that targets the Master branch.
2. When the PR is approved and merged then the commit should be tagged with the release's version number.
3. Perform steps 3-6 from the [Staging deployment instructions](#markdown-header-staging), targeting the live server this time.

## RESOURCES

* [BigCommerce Stencil Documentation](https://developer.bigcommerce.com/stencil-docs/getting-started/about-stencil)
* [BigCommerce Stencil Troubleshooting](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/troubleshooting-your-setup)
* [Blackhawk Network BigCommerce Theme Bitbucket Repo](https://bitbucket.org/CyberDuck/blackhawk-network-bigcommerce-theme/src)

----

Made with ♥ by [Cyber-Duck Ltd](https://www.cyber-duck.co.uk).
