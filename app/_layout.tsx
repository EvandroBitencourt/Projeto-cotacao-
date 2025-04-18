import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="index" options={{ title: 'Dólar Americano' }} />
            </Drawer>

            <Drawer.Screen
                name="eur"
                options={{ title: 'Euro' }}
            />
        </GestureHandlerRootView>
    )
}