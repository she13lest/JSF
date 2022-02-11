const favorites = ['id-2', 'id-12', 'id-56'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-4',
          name: 'Food',
          nodes: [
            {
              id: 'id-12',
              name: 'Food',
              nodes: [
                {
                  id: 'id-56',
                  name: 'Food',
                  nodes: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


export function markFavorites(tree, favorites) {
    const isFavorite = favorites.includes(tree.id)

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites))
    }

}


const result = markFavorites(tree, favorites);

console.log(result)