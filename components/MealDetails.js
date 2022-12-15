import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const MealDetails = ({
   duration,
   complexity,
   affordability,
   style,
   textStyle,
}) => {
   return (
      <View style={[styles.detail, style]}>
         <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
         <Text style={[styles.detailItem, textStyle]}>
            {complexity.toUpperCase()}
         </Text>
         <Text style={[styles.detailItem, textStyle]}>
            {affordability.toUpperCase()}
         </Text>
      </View>
   );
};

export default MealDetails;

const styles = StyleSheet.create({
   detail: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
   },
   detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
   },
});
