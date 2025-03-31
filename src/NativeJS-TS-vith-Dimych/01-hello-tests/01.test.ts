import { describe, it, expect, beforeEach } from 'vitest';
import { mult, splitIntoWords, sum } from './01';


//data
//переносим сюда переменные, чтобы не дублировать код
// без присваивания, чтобы не перезатереть
let a: number;
let b: number;
let c: number;
let d: number;


//а здесь уже присваиваем значения
//каждый раз при выполнении новогй тест-функции
//эти значения будут таковыми даже если их перезатерли ранее
//дословно - перед каждой
beforeEach( () => {
    a = 1
    b = 2
    c = 3
    d = 0
})

describe('Sum tests', () => {
  it('sum should be correct', () => {
    
    

    //action
    const result1 = sum(a, b)
    const result2 = sum(a, c)
    const result3 = sum(b, c)

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
    expect(result3).toBe(5);
  });
});

describe('Multiply tests', () => {
    it('multiply should be correct', () => {
      
      
  
      //action
      const result1 = mult(a, b)
      const result2 = mult(a, c)
      const result3 = mult(b, c)
      const result4 = mult(b, d)
  
      //expect result
      expect(result1).toBe(2);
      expect(result2).toBe(3);
      expect(result3).toBe(6);
      expect(result4).toBe(0);
    });
  });

  describe('Spliting tests', () => {
    it('Spliting into words should be correct', () => {
      
      //data
      const sent1 = 'Hello my friends!';
      const sent2 = 'JS - the    best programming language';
       
  
      //action
      const result1 = splitIntoWords(sent1)
      const result2 = splitIntoWords(sent2)
      
      //expect result
      expect(result1.length).toBe(3);
      expect(result1[0]).toBe('hello');
      expect(result1[1]).toBe('my');
      expect(result1[2]).toBe('friends');
      expect(result2.length).toBe(5);
      expect(result2[0]).toBe('js');
      expect(result2[1]).toBe('the');
      expect(result2[2]).toBe('best');
      expect(result2[3]).toBe('programming');
      expect(result2[4]).toBe('language');
      
      
      
    });
  });