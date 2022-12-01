import { TextSearchOptions } from '../index';
import { searchList } from '../index';
describe('tests', () => {
  test('returns a list of items with bolded matching labels', () => {
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

  test('returns a list of items with bolded matching labels with global matches', () => {
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

  test('returns a list of items with bolded matching labels containing "." character', () => {
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

  test('ignores upper case when searching for labels', () => {
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

  test('ignores case when searching for labels', () => {
    const list = [
      {
        label: 'Nike.com Nike',
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
      searchText: 'Ni',
      boldClassName: 'bold-text',
    };

    const expected = [
      {
        label: `<span class=\"bold-text\">Ni</span>ke.com <span class=\"bold-text\">Ni</span>ke`,
        value: 'nike',
      },
    ];

    const actual = searchList(list, options);
    expect(actual).toEqual(expected);
  });

  test('returns an empty list if no items match the search text', () => {
    const list = [{ label: 'Hello, world!' }, { label: 'Goodbye, world.' }, { label: 'Farewell, world' }];
    const options = {
      labelKey: 'label',
      searchText: 'universe',
      boldClassName: 'bold',
    };
    expect(searchList(list, options)).toEqual([]);
  });
});
