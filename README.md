# Andrei Cartera -- Audio Programmer | Gameplay Programmer 

The following is a page consisting of collections of code samples used as a reference for academic purposes or for whomever may be concered.

<br>

## Table of Contents
### 1) [General Programming](#general)  
### 2) [Audio](#audio)  
### 3) [C++ STL](#c)  

<br> <br>

# <a name="general"> </a> General Programming

<br> <br>

# <a name="audio"> </a> Audio 

This is an example of a simple normalization function that takes an abstract AudioData class "ad" that contains data extracted from a .WAV file.
The data was stored in a std::vector but was only acessible thorugh class getters AudioData::sample() which returns a float, and AudioData::data() which returns a pointer to a float. Had the vector been accessible it would've been more efficient to use std::max_range() for finding the maximum sample.

This was part of a larger academic progect
![alt text](/normalize_function.PNG "normalize_function")

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



# <a name="c"> </a> C++ STL