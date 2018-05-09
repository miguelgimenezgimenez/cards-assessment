import dronePath from '../../utils/dronePath'

test('it handles single string argument separated by new line', () => {
  const input = `5 5 \n 3 3 E \nL\n3 3 E\nMMRMMRMRRM\n1 2 N\nLMLMLMLMMLMLMLMLMM`
  expect(dronePath(input)).toBe('3 3 N\n5 1 E\n1 4 N')
})

test('it handles single string argument separated by comas', () => {
  const input = `5 5 , 3 3 E ,L,3 3 E,MMRMMRMRRM,1 2 N,LMLMLMLMMLMLMLMLMM`
  expect(dronePath(input)).toBe('3 3 N\n5 1 E\n1 4 N')
})

test('it handles all elements passed as arguments ', () => {
  expect(dronePath('5 5', '3 3 E', 'L', '3 3 E', 'MMRMMRMRRM', '1 2 N', 'LMLMLMLMMLMLMLMLMM'))
    .toBe('3 3 N\n5 1 E\n1 4 N')
})
