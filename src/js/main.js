"use strict";
import burger from './modules/burger'
import modal from './modules/modal'
import getProducts from './modules/getProducts'
window.addEventListener('DOMContentLoaded', () => {
    burger()
    modal()
    getProducts()
})