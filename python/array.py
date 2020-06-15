"""
This file reorders the acquired sample_date into a human readable shape to make it easier processable
You can adjust frames, samples, chips and amount of used antennas but you have to use the following settings:
interleaved_rx = 0 and data_format = RADAR_RX_DATA_COMPLEX
"""

import numpy as np
sample_data = np.load('sample_data.npy')
print(sample_data)
# print('first sample: ', len(sample_data[0]), sample_data[0])

Frames = 30
samples = 64
chirps = 16
rxAntennas = 2
signal_part = 2
complex_data = True

frame_list = [] #saves all [frames[antennas[chirps[compelex no]]]] 30x2x16x64
antenna_list = [] #saves [antennas[chirps[complex no]]]


for frameNo in range(0, Frames):
    newFrame = []
    frame = sample_data[frameNo]
    for chirpNo in range(0, chirps):
        if rxAntennas == 2:
            for sampleNo in range(0, samples):
                newFrame.insert(chirpNo*64+sampleNo,complex(frame[sampleNo+(4*samples*chirpNo)],frame[samples+(4*samples*chirpNo)+sampleNo]))
                newFrame.insert(chirpNo*64+1024+sampleNo,complex(frame[2*samples+(4*samples*chirpNo)+sampleNo],frame[3*samples+(4*samples*chirpNo)+sampleNo]))
        else:
            for sampleNo in range(0, samples):
                newFrame.insert(chirpNo*64+sampleNo,complex(frame[sampleNo],frame[samples+sampleNo]))   
    frame_list.append(np.reshape(newFrame,(rxAntennas,chirps,samples)))


# print(len(frame_list)) #frame_list) 30 frames with 30x2x16x64 samples
# print(len(frame_list[0])) #frame_list[0]) two antennas with 2x16x64 samples
# print(len(frame_list[0][0])) #frame_list[0][0]) chirps with 16x64 samples
# print(len(frame_list[0][0][0])) #frame_list[0][0][0]) 64 complex numbers for one antenna
# print(frame_list[0][1][11][32]) #one complex number


