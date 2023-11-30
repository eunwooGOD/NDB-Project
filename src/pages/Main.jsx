import React from 'react'

const Main = () => {
  return (
<div class="main_wrap main_wrap_backImg_night">

    <div class="main_floating_font">

        <p class="main_floating_p">
            <MARQUEE scrollamount="13">
</MARQUEE>                        
        </p>
        <p class="main_floating_p">
            <MARQUEE scrollamount="7">function reverseArray(arr) {return arr.reverse();} const originalArray = [1, 2, 3, 4, 5]; const reversedArray = reverseArray(originalArray);
                console.log(reversedArray); // [5, 4, 3, 2, 1]</MARQUEE>

        </p>
        <p class="main_floating_p">
            <MARQUEE scrollamount="11"> #include <iostream> #include <algorithm> using namespace std; int findMax(int arr[], int size) {return *max_element(arr, arr + size);
                        } int main() {int numbers[] = {10, 5, 8, 20, 3}; int size = sizeof(numbers) / sizeof(numbers[0]); int maxNumber = findMax(numbers, size);
                        cout << "Max: " << maxNumber << endl; return 0; } </MARQUEE>

        </p>
        <p class="main_floating_p">
            <MARQUEE scrollamount="9">for (let i = 1; i <= 10; i++) { if (i % 2 !==0) { console.log(i); } } </MARQUEE>
        </p>
        <p class="main_floating_p">
            <MARQUEE scrollamount="15">
                func reverseString(_ str: String) -> String {return String(str.reversed())} let originalStr = "Hello, World!"
                let reversedStr = reverseString(originalStr)print(reversedStr) // "!dlroW ,olleH"</MARQUEE>
        </p>
        <p class="main_floating_p">
            <MARQUEE behavior="scroll" scrollamount="9">using System; #include <iostream> #include <fstream> using namespace std; int main() {ifstream file("example.txt");}
        </MARQUEE></p>
        <p class="main_floating_p"><MARQUEE scrollamount="13">func reverseString(_ str: String) -> String {return String(str.reversed())} let originalStr = "Hello, World!" let reversedStr = reverseString(originalStr)
                print(reversedStr) // "!dlroW ,olleH" </MARQUEE>
        </p>
        <p class="main_floating_p">
            <MARQUEE scrollamount="10">def fibonacci(n): if n <= 0: return [] elif n==1: return [0] elif n==2: return [0, 1] else: fib=[0, 1] for i in range(2, n): fib.append(fib[i - 1] + fib[i - 2]) return fib n=10 print(fibonacci(n))
                    # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] </MARQUEE>
        </p>
        <p class="main_floating_p">
            <MARQUEE scrollamount="7">for (var i = 0; i < num; i++) { document.write('<span class="star">*</span>');}</MARQUEE>
        </p> 
        <p class="main_floating_p">
            <MARQUEE behavior="scroll" scrollamount="12">public class StarPattern {public static void main(String[] args) {int rows = 5; for (int i = 1; i <= rows; i++) { for (int j=1; j <=i; j++) { System.out.print("* ");
                } System.out.println();}}}</MARQUEE>
        </p>

        <p class=" main_floating_p"><MARQUEE behavior="scroll" scrollamount="10"> function generateRandomNumber() {return Math.floor(Math.random() * 100) + 1;} const randomNum = generateRandomNumber();
                        console.log(`Random Number: ${randomNum}`);</MARQUEE>
        </p>
        <p class="main_floating_p"><MARQUEE behavior="scroll" scrollamount="12">def print_triangle(n): for i in range(n): print(' ' * (n - i - 1) + '*' * (2 * i + 1)) print_triangle(5)
        </MARQUEE>
        </p>
        <p class="main_floating_p"><MARQUEE behavior="scroll" scrollamount="8">function generateRandomNumber() {return Math.floor(Math.random() * 100) + 1;} const randomNum = generateRandomNumber(); console.log(`Random Number: ${randomNum}`);
        </MARQUEE>
        </p>
        <p class="main_floating_p"><MARQUEE behavior="scroll" scrollamount="17">function longerString(str1, str2) {return str1.length >= str2.length ? str1 : str2;} const string1 = "Hello";const string2 = "World!";
                console.log(longerString(string1, string2)); // "World!" </MARQUEE>
        </p>
        <p class="main_floating_p"><MARQUEE behavior="scroll" scrollamount="8">numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] even_numbers = [x for x in numbers if x % 2 == 0] print(even_numbers) # [2, 4, 6, 8, 10]
        </MARQUEE>
        </p>
        <p class="main_floating_p"><MARQUEE behavior="scroll" scrollamount="13">person = {"name": "John","age": 30,"city": "New York" } print(person) # {'name': 'John', 'age': 30, 'city': 'New York'}
        </MARQUEE>
        </p>
        </div>
    <div class="main_searchWrap">
        <div class="main_NavFlex">
            <div class="main_NavLangDB_Wrap">
                <div class="main_NavLangDB_Text">
                    <label for="main_Nav_DB">
                        <p>DB&nbsp</p>
                    </label>
                    <p>&nbsp|&nbsp</p>
                    <label for="main_Nav_API">
                        <p>&nbspAPI</p>
                    </label>
                </div>
                <div class="main_NavLangDB_Select">
                    <input type="radio" id="main_Nav_DB" class="main_Navwon" name="main_Nav_RadioName"/>
                    <input type="radio" id="main_Nav_API" class="main_Navwon" name="main_Nav_RadioName"/>
                </div>
            </div>
            <div class="main_text">
                <p>
                    언어와 엔진을 설정한 후 <br/>배우고 싶은 부분을 집중 성장 시켜보세요.
                </p>
            </div>
        </div>


        <div class="main_search main_search_night">
            <select name="main_language" id="" class="main_searchLanguage2" style="width:50px;height:30px;">
                <option value=" ">언어</option>
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="javascript">javascript</option>
                <option value="java">java</option>
                <option value="python">python</option>
                <option value="c_language">C언어</option>
            </select>

            <input type="text" class="main_searchBar2" name="main_searchBar_Name"/>

            <div class="main_autocomplete"></div>
            <button type="submit" class="main_search_button" onclick="user_Btn()">
                <i class="fa-solid fa-magnifying-glass" style="color: #d1d1d1;"></i>
            </button>
        </div>
    </div>
</div>
  )
}

export default Main