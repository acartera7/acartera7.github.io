# Andrei Cartera -- Audio Programmer | Gameplay Programmer 

The following is a page consisting of collections of code samples used as a reference for academic purposes or for whomever may be concered. Everything contained in this page are from parts of academic projects.

<span style="color:red">*This page is a work in progress and doesn't contain samples of every piece of code written by the author*</span>.

<br>

## Table of Contents
### 1) [General Programming](#general)  
### 2) [Audio](#audio)  
### 3) [C++ STL](#c)  

<br> <br>

<a name="general"> </a> General Programming
===================================
This following section is comporised of a chronological assortment of functions and code blocks in both C and C++ of general programming paradigms.

### Spellcheck (C)
![Spellcheck Function](/spellcheck.JPG "Spellcheck Function")
<br> <br>

<a name="audio"> </a> Audio 
===================================
This following section is comprised of multiple examples of functions and code blocks which are written primarily for Audio in video games.

### Normalize (C++)
This is an example of a simple normalization function that takes an AudioData Class "ad" that contains audio data extracted from a .WAV file.
The data was stored in a std::vector but was only acessible thorugh class getters AudioData::sample() which returns a float, and AudioData::data() which returns a pointer to a float. Had the vector been accessible it would've been more efficient to use std::max_range() for finding the maximum sample.

![Normalize Function](/normalize_function.PNG "Normalize Function")

<br> <br>




<a name="c"> </a> C++ STL
===================================
This following section is comprised of multiple examples of functions and code blocks that demonstrate the use of C++'s Standard Template Library (STL). 