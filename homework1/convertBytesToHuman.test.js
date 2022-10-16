/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman(-1)).toBe(false)
    expect(convertBytesToHuman('string')).toBe(false)
    expect(convertBytesToHuman(true)).toBe(false)
    expect(convertBytesToHuman([1, 2, 3])).toBe(false)
    expect(convertBytesToHuman(null)).toBe(false)
    expect(convertBytesToHuman(undefined)).toBe(false)
});

test('Возвращает корректное значение для чисел в B', () => {
    expect(convertBytesToHuman(0)).toBe('0 B')
    expect(convertBytesToHuman(5)).toBe('5 B')
    expect(convertBytesToHuman(1023)).toBe('1023 B')
});

test('Возвращает корректное значение для чисел в KB', () => {
    expect(convertBytesToHuman(1024)).toBe('1 KB')
    expect(convertBytesToHuman(2048)).toBe('2 KB')
    expect(convertBytesToHuman(123123)).toBe('120.24 KB')
    expect(convertBytesToHuman(1048575)).toBe('1024.00 KB')
});

test('Возвращает корректное значение для чисел в MB', () => {
    expect(convertBytesToHuman(1048576)).toBe('1 MB')
    expect(convertBytesToHuman(2097152)).toBe('2 MB')
    expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
    expect(convertBytesToHuman(1073741823)).toBe('1024.00 MB')
});

test('Возвращает корректное значение для чисел в GB', () => {
    expect(convertBytesToHuman(1073741824)).toBe('1 GB')
    expect(convertBytesToHuman(2147483648)).toBe('2 GB')
    expect(convertBytesToHuman(123123123123)).toBe('114.67 GB')
    expect(convertBytesToHuman(1099511627775)).toBe('1024.00 GB')
});

