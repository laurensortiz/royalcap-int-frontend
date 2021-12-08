const GetFeatureFlag = (featureFlag, name) => {
  return featureFlag.find((el) => el.name === name) || { isActive: false }
}

export default GetFeatureFlag
