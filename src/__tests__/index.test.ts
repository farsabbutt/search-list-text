import { TextSearchOptions } from '../index';
import { searchList } from '../index';
describe('tests', () => {
  test('case#1 should have correct output', () => {
    const list = [
      {
        label: 'Nike',
        value: 'nike',
      },
      {
        label: 'Addidas',
        value: 'addidas',
      },
      {
        label: 'Puma',
        value: 'puma',
      },
    ];

    const options: TextSearchOptions = {
      labelKey: 'label',
      searchText: 'um',
      boldClassName: 'bold-text',
    };

    const expected = [
      {
        label: `P<span class="bold-text">um</span>a`,
        value: 'puma',
      },
    ];

    const actual = searchList(list, options);
    expect(actual).toEqual(expected);
  });

  test('case#2 should have correct output', () => {
    const list = [
      {
        label: 'Nike Nike',
        value: 'nike',
      },
      {
        label: 'Addidas',
        value: 'addidas',
      },
      {
        label: 'Puma Puma',
        value: 'puma',
      },
    ];

    const options: TextSearchOptions = {
      labelKey: 'label',
      searchText: 'ik',
      boldClassName: 'bold-text',
    };

    const expected = [
      {
        label: `N<span class=\"bold-text\">ik</span>e N<span class=\"bold-text\">ik</span>e`,
        value: 'nike',
      },
    ];

    const actual = searchList(list, options);
    expect(actual).toEqual(expected);
  });

  test('case#3 should have correct output', () => {
    const list = [
      {
        label: 'Nike.com',
        value: 'nike',
      },
      {
        label: 'Addidas.com',
        value: 'addidas',
      },
      {
        label: 'Puma.com',
        value: 'puma',
      },
    ];

    const options: TextSearchOptions = {
      labelKey: 'label',
      searchText: '.com',
      boldClassName: 'bold-text',
    };

    const expected = [
      {
        label: `Nike<span class=\"bold-text\">.com</span>`,
        value: 'nike',
      },
      {
        label: `Addidas<span class=\"bold-text\">.com</span>`,
        value: 'addidas',
      },
      {
        label: `Puma<span class=\"bold-text\">.com</span>`,
        value: 'puma',
      },
    ];

    const actual = searchList(list, options);
    expect(actual).toEqual(expected);
  });

  test('case#4 should have correct output', () => {
    const list = [
      {
        label: 'Nike.com',
        value: 'nike',
      },
      {
        label: 'Addidas.com',
        value: 'addidas',
      },
      {
        label: 'Puma.com',
        value: 'puma',
      },
    ];

    const options: TextSearchOptions = {
      labelKey: 'label',
      searchText: 'n',
      boldClassName: 'bold-text',
    };

    const expected = [
      {
        label: `<span class=\"bold-text\">N</span>ike.com`,
        value: 'nike',
      },
    ];

    const actual = searchList(list, options);
    expect(actual).toEqual(expected);
  });
});
