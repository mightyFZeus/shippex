import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LANDING_PAGE, LOGIN, PROFILE, SCAN, SHIPMENT, WALLET } from "../constants/constants"


export type MainStackParams = {

}

export type AuthStackParams = {
    [LOGIN]: undefined
    [LANDING_PAGE]: undefined
}


export type TabNavigationParams = {
    [SHIPMENT]: undefined;
    [SCAN]: undefined;
    [WALLET]: undefined;
    [PROFILE]: undefined;
};


export type AuthStackNavigationProp = NativeStackNavigationProp<
    AuthStackParams,
    "login"
>;


export interface RootStackParamsList
    //   AuthStackParams,
    extends TabNavigationParams { }

declare global {
    // eslint-disable-next-line  @typescript-eslint/no-namespace
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamsList { }
    }
}
