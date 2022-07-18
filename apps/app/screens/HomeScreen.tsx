import React from 'react'
// State
import { useUserState } from '../atoms/userState'
// Navigation
import { AetherLink } from 'aetherspace/navigation'
// Primitives
import { View, AetherImage, Pressable, Text } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'

/* --- <HomeScreen/> --------------------------------------------------------------------------- */

const HomeScreen = () => {
  // Leave user empty for now
  const [user, setUser] = useUserState()

  // -- Handlers --

  const onSignIn = () => {
    // Sign In
    setUser({
      name: 'Thorr',
      email: 'thorr@codinsonn.dev',
      image: 'https://codinsonn.dev/_next/image?url=%2Fassets%2FCodelyFansLogoPic160x160.jpeg&w=3840&q=75',
      website: 'https://codinsonn.dev',
    })
  }

  const onSignOut = () => {
    // Sign Out
    setUser(null)
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
            tw="flex-row py-2.5 px-5 mx-3 mt-3 bg-black items-center"
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
