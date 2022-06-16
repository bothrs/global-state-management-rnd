import React from 'react'
// Types
import { UserType } from '../types/UserType'
// Navigation
import { AetherLink } from 'aetherspace/navigation'
// Primitives
import { View, AetherImage, Pressable, Text } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'

/* --- <HomeScreen/> --------------------------------------------------------------------------- */

const HomeScreen = () => {
  // Leave user empty for now
  const user = null as unknown as UserType

  // -- Handlers --

  const onSignIn = () => {
    // TODO: Add login code
    console.warn('Logging in')
  }

  const onSignOut = () => {
    // TODO: Add login code
    console.warn('Logging out')
  }

  // -- Render --

  return (
    <View tw="flex-1 bg-white items-center justify-center">
      <AetherLink to={user ? '/profile' : '/'}>
        <AetherImage src={user?.image || '/img/icon.png'} tw="w-20 h-20 mt-0 mb-3 overflow-hidden rounded-full" />
      </AetherLink>
      <H1 tw="text-green-500 pb-5 roboto-bold font-bold text-base">
        {user?.name ? `Hello ${user.name}` : 'Unknown user, log in to continue'}
      </H1>
      {user ? (
        <>
          <AetherLink href="/profile" tw="roboto-bold pt-5 text-center text-sm" asText>
            View profile
          </AetherLink>
          <Pressable
            accessibilityRole="button"
            tw="flex-row py-2.5 px-5 mx-3 bg-black items-center"
            onPress={onSignOut}
          >
            <Text tw="text-white font-bold">Sign Out</Text>
          </Pressable>
        </>
      ) : (
        <Pressable accessibilityRole="button" tw="flex-row py-2.5 px-5 mx-3 bg-black items-center" onPress={onSignIn}>
          <Text tw="text-white font-bold">Sign In</Text>
        </Pressable>
      )}
    </View>
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export default HomeScreen
