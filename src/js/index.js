import _ from 'lodash';
import '../sass/styles.sass';
import abc from '../data/products.json';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  for (let ab in abc) {
    console.log(typeof(ab['name']))
  }

  return element;


}

document.body.appendChild(component());