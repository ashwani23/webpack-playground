import { groupBy } from 'lodash-es'
import people from './people'

import './scss/style.scss'
import './code-image'

/** Grouping the array of people by manager */
const managerGroups = groupBy(people, "manager");

/** Create a empty DIV element */
const root = document.createElement("div")

/** Stringify the grouped manager array of objects and put it as a content of DIV(root) */
root.innerHTML = `<pre> ${JSON.stringify(managerGroups, null, 2)} </pre>`

/** Add the crafted DIV to BODY tag as a child */
document.body.appendChild(root)