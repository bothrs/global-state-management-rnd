import React from 'react'
// State
import { useUserState } from '../atoms/userState'
// Navigation
import { useAetherNav } from 'aetherspace/navigation'
// Primitives
import { AetherView, AetherPressable, AetherText } from 'aetherspace/primitives'
// Icons
import { BackIcon, HomeIcon } from '../icons'

/* --- <ProfileScreen/> ------------------------------------------------------------------------ */

const ProfileScreen = () => {
  // Leave user empty for now
  const [user] = useUserState()
  // Hooks
  const { goBack, openLink } = useAetherNav()
  // Render
  return (
    <AetherView tw="flex-1 bg-white items-center justify-center">
      <AetherPressable tw="items-center" onPress={() => openLink(user?.website || '/profile')}>
        <AetherText>Contact Info:</AetherText>
        <AetherText tw="font-bold text-lg">{user?.email}</AetherText>
      </AetherPressable>
      <AetherView tw="flex-row items-center content-center justify-center my-5">
        <AetherPressable tw="flex-row py-2.5 px-5 mx-3 bg-black items-center" onPress={goBack}>
          <BackIcon width={16} height={16} />
          <AetherText tw="text-white"> Go Back</AetherText>
        </AetherPressable>
        <AetherPressable tw="flex-row py-2.5 px-5 mx-3 bg-black items-center" onPress={() => openLink('/')}>
          <HomeIcon width={15} height={15} />
          <AetherText tw="text-white"> Home</AetherText>
        </AetherPressable>
      </AetherView>
    </AetherView>
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export default ProfileScreen
