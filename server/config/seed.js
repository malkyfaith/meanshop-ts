/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Product from '../api/product/product.model';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if (!config.seedDB) {
        return Promise.resolve();
    }


    let promises = [];

    let thingPromise = Thing.find({}).remove()
        .then(() => Thing.create({
            name: 'Development Tools',
            info: 'Integration with popular tools such as Webpack, Babel, TypeScript, Karma, Mocha, ESLint, Protractor, '
                + 'Pug, Stylus, Sass, and Less.'
        }, {
                name: 'Server and Client integration',
                info: 'Built with a powerful and fun stack: MongoDB, Express, Angular, and Node.'
            }, {
                name: 'Smart Build System',
                info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of '
                    + 'scripts and styles into your app.html'
            }, {
                name: 'Modular Structure',
                info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
            }, {
                name: 'Optimized Build',
                info: 'Build process packs up your templates as a single JavaScript payload, minifies your '
                    + 'scripts/css/images, and rewrites asset names for caching.'
            }, {
                name: 'Deployment Ready',
                info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
            }))
        .then(() => console.log('finished populating things'))
        .catch(err => console.log('error populating things', err));
    promises.push(thingPromise);

    let userPromise = User.find({}).remove()
        .then(() => User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@example.com',
            password: 'test'
        }, {
                provider: 'local',
                role: 'admin',
                name: 'Admin',
                email: 'admin@example.com',
                password: 'admin'
            })
            .then(() => console.log('finished populating users'))
            .catch(err => console.log('error populating users', err)));
    promises.push(userPromise);

    let productPromise = Product.find({}).remove()
        .then(() => Product.create(
            {
                title: 'MeanGlass',
                price: 345.5,
                stock: 10,
                description: 'This is MeanGlass'
            },
            {
                title: 'MEAN eCommerce Book',
                imageUrl: '/assets/uploads/meanbook.jpg',
                price: 25,
                stock: 250,
                description: 'Build a powerful e-commerce...'
            }, {
                title: 'tshirt',
                imageUrl: '/assets/uploads/meantshirt.jpg',
                price: 15,
                stock: 100,
                description: 'tshirt with the MEAN logo'
            }, {
                title: 'coffee mug',
                imageUrl: '/assets/uploads/meanmug.jpg',
                price: 8,
                stock: 50,
                description: 'Convert coffee into MEAN code'
            },
            {
                title: 'A Book',
                price: 25,
                stock: 10,
                description: 'This is A book'
            },
            {
                title: 'Cycle',
                price: 125,
                stock: 5,
                description: 'This is A cycle'
            },
            {
                title: 'Bus',
                price: 16025,
                stock: 3,
                description: 'This is A Bus'
            }))
        .then(() => console.log('finished populating Products'))
        .catch(err => console.log('error populating products', err));

    promises.push(productPromise);

    return Promise.all(promises);
}
