import sys
import numpy as np

sample_data = [1,2,3,4,5,6,7,8,9]
np.save('./'+sys.argv[1]+'/sample_data', sample_data)

print("I'm a python file!")