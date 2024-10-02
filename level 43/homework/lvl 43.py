def count_items(item_list, item):
    return item_list.count(item)


example_list = [1, 2, 3, 4, 3, 3, 5, 6, 3]
item_to_count = 3
result = count_items(example_list, item_to_count)
print(f"ელემენტი {item_to_count} სიაში გვხვდება {result}-ჯერ.")



def average_of_list(num_list):
    if len(num_list) == 0:
        return 0
    total = 0
    for num in num_list:
        total += num
    return total / len(num_list)

































































































