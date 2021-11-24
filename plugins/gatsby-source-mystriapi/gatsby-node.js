const axios = require("axios")
const pluralize = require("pluralize")
const createNodeHelper = require("gatsby-node-helpers").default

function sourceNodes({ actions }, configOptions) {
  const { createNode } = actions
  const { apiUrl, contentTypes } = configOptions
  const types = contentTypes
    .map(type => type.toLowerCase())
    .map(type => pluralize(type))
  // 从外部数据源中获取数据
  let final = getContents(types, apiUrl)

  for (let [key, value] of Object.entries(final)) {
    const { createNodeFactory } = createNodeHelper({
      typePrefix: key,
    })

    const createNodeObject = createNodeFactory("content")
    value.forEach(item => {
      createNode(createNodeObject(item))
    })
  }
}

async function getContents(types, apiUrl) {
  const size = types.length
  let index = 0
  // {posts: [], products: []}
  const final = {}

  // 初始调用

  await loadContents()

  async function loadContents() {
    if (index === size) return
    let { data } = await axios.get(`${apiUrl}/${types[index]}`)
    final[types[index++]] = data
    await loadContents()()
  }
}

module.exports = {
  sourceNodes,
}
