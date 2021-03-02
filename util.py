import sys
import os
import base64

__all__ = ('gen_token', 'shutdown')

def gen_token():
    if sys.platform == 'linux':
        with open('/dev/random', 'rb') as fp:
            return base64.b64encode(fp.read(12)).decode()
    else:
        raise NotImplementedError(f'token generation isn\'t implemented on platform {sys.platform}')

def shutdown():
    if sys.platform == 'linux':
        # os.system('shutdown +1')
        os.system('notify-send -u critical \'shutting down is requested\'')
    else:
        raise NotImplementedError()
