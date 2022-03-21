import { FriendlyList } from "./FriendlyList";

it('should return pascal cased terms', () => {
  expect(FriendlyList({items:['Item', 'AnotherItem', 'FinalItem']})).toEqual(
    'Item, another item and final item',
  );
});
