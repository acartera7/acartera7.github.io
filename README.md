# Andrei Cartera

![alt text](/normalize_function.PNG "normalize_function")

html test

**or**

    
    /**
     * Normalizes the audio data ad to the specifed decibel level dB.
     * 
     * \param ad audio data object
     * \param dB requested max decibel level
     */
    void normalize(AudioData& ad, float dB) {
    	unsigned frame_count = ad.frames();
    	unsigned channel_count = ad.channels();
    	float max_sample = 0;

    	for (unsigned chan = 0; chan < channel_count; chan++) {
    		float sum = 0.0f;
    		for (unsigned frame = 0; frame < frame_count; frame++) {
    			sum += ad.sample(frame, chan);
    		}
    		float DCOffset = sum / frame_count;
    		for (unsigned frame = 0; frame < frame_count; frame++) {
    			ad.sample(frame, chan) -= DCOffset;
    		}
    	}
    
    	for (unsigned i = 0; i < frame_count * channel_count; i++) {
    		max_sample < abs(ad.data()[i]) ? max_sample = abs(ad.data()[i]) : false;
    	}
    
    	float g = pow(10.0f, dB / 20.0f);

    	float m = g / max_sample;

    	for (unsigned i = 0; i < frame_count * channel_count; i++) {
    		ad.data()[i] *= m;
    	}
    }
