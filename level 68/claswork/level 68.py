# 111111111111


def find_average(nums):
    total = sum(nums)
    count = len(nums)
    return total / count

# 2222222222222222


def cube_checker(volume, side):
    if volume <= 0 or side <= 0:
        return False
    cube_volume = side ** 3
    return cube_volume == volume