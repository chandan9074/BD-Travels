import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import bn_cloth from "../../assets/images/bn_cloth.jpg";
import bn_shampo from "../../assets/images/bn_shampo.jpg";
import bn_shoe from "../../assets/images/bn_shoe.jpg";

const Banner = () => {
    const images = [
        { id: 1, img: bn_cloth },
        { id: 2, img: bn_shoe },
        { id: 3, img: bn_shampo },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateIndex = () => {
        setSelectedIndex(prevIndex => (prevIndex + 1) % images.length);
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
            updateIndex();
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    
  return (
      <View style={styles.container} >
          <Image
                source={images[selectedIndex].img}
                style={styles.bannerImg}
          />
          <View style={styles.bulletContainer}>
              {images.map((_, index) => (
              <View key={index} style={{
                  height: 4, 
                    width: 20,
                    backgroundColor: `${selectedIndex === index ? "black": "#B2B2B2"}`,
                      borderRadius: 10,
                    marginRight: 4
              }} />
          ))}
          </View>
    </View>

  )
}

export default Banner;

const styles = StyleSheet.create({
    bannerImg: {
        flex: 1,
        height: 200,
        borderRadius: 8
    },
    container: {
        marginTop: 28,
        paddingHorizontal: 16
    },
    sliderBullet: {
        height: 10, 
        width: 10,
        backgroundColor: "black",
        borderRadius: 50,
        
    },
    bulletContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 8
    }
})