"""
Python 标识符
"""


def is_valid_identifier(name):
    """
    2var is not a valid identifier because it starts with a number
    """
    try:
        exec(f"{name} = None")
        return True
    except:
        return False


print(is_valid_identifier("2var"))
print(is_valid_identifier("var2"))
