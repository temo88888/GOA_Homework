def say_hello(name):
    return f"Hello, {name}"




#//////////////////////////////

def array_plus_array(arr1,arr2):
    result = 0
    for i in arr1:
        result += i
    for i in arr2:
        result += i
    return result

# /////////////////////////////////////////////

def monkey_count(n):
    return list(range(1, n + 1))


# ///////////////////////////////////////////////


def reverse_seq(n):
    result = []
    for i in range(n,0,-1):
        result.append(i)
    return result


# ///////////////////////////////////////////////////////

def reverse_seq(n):
    result = []
    for i in range(n,0,-1):
        result.append(i)
    return result


# ////////////////////////////////////



def reverse_words(s):
    return ' '.join(reversed(s.split()))