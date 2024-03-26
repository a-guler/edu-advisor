import os
api_keys = {
    os.environ.get("main_key"): "7oDYjo3d9r58EJKYi5x4E8"
}

users = {
    "7oDYjo3d9r58EJKYi5x4E8": {
        "name": "main-key"
    }
}

def check_api_key(api_key: str):
    return api_key in api_keys

def get_user_from_api_key(api_key: str):
    return users[api_keys[api_key]]