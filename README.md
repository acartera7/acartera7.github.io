# Andrei Cartera -- Audio Programmer | Gameplay Programmer 

<span style="color:red">**This page is a work in progress and therefore is missing some code samples*</span>

The following is a page consisting of collections of code samples used as a reference for academic purposes or for whomever may be concered. Everything contained in this page are from parts of academic projects.



<br>

## Table of Contents
### 1) [General Programming](#general)  
### 2) [Audio](#audio)  
### 3) [C++ STL](#c)  

<br> <br>

<a name="general"> </a> General Programming
===================================
This following section is comporised of an assortment of functions and code blocks written in both C and C++ of general programming paradigms. The samples are sorted in semi-chronological order, starting from the most recently written to older examples. 

### Spellcheck (C)
![Spellcheck Function](/Spellcheck.PNG "Spellcheck Function") <br>

### Point Class (C++)
![Point Class](/Point_class.PNG "Point Class") <br>

### List Class and Class Template (C++)
![List Class](/List_class.PNG "List Class") ![List Class Template](/List_TClass.PNG "List Class Template") <br>
<br> <br>

<a name="audio"> </a> Audio 
===================================
This following section is comprised of multiple examples of functions and code blocks which are written primarily for Audio in video games.

### Normalize (C++)
This is an example of a simple normalization function that takes an AudioData Class "ad" that contains audio data extracted from a .WAV file.
The data was stored in a std::vector but was only acessible thorugh class getters AudioData::sample() which returns a float, and AudioData::data() which returns a pointer to a float. Had the vector been accessible it would've been more efficient to use std::max_range() for finding the maximum sample.

![Normalize Function](/normalize_function.PNG "Normalize Function") <br>

<br> <br>




<a name="c"> </a> C++ STL
===================================
This following section is comprised of multiple examples of functions and code blocks that demonstrate the use of C++'s Standard Template Library (STL). 