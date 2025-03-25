import React from "react";
import { ModalProps, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";
import { animationIn, animationOut } from "../../types/appTypes";
import TouchableComponent from "./Touchable";
import MainIcon from "./Icon";
import { toastConfig } from "../../utils/ToastConfig";
import { colors } from "../../theme/themes";


interface GeneralModalProps extends ModalProps {
    visible: boolean;
    closeModal: () => void;
    animationIn?: animationIn;
    animationOut?: animationOut;
    style?: StyleProp<ViewStyle>;
    animationInTiming?: number;
    animationOutTiming?: number;
    swipeDirection?: "down" | "up" | "left" | "right";
    onSwipeComplete?: () => void;
    propagateSwipe?: boolean;
    backdropOpacity?: number | undefined;
    closeButton?: boolean;
}

const GeneralModal = ({
    visible,
    closeModal,
    children,
    animationIn: animateIn,
    animationOut: animateOut,
    style,
    animationInTiming = 500,
    animationOutTiming = 500,
    swipeDirection,
    propagateSwipe,
    onSwipeComplete,
    backdropOpacity,
    closeButton,
}: GeneralModalProps) => {
    return (
        <>
            <Modal
                animationIn={animateIn ? animateIn : "slideInUp"}
                animationInTiming={animationInTiming}
                animationOut={animateOut ? animateOut : "slideOutDown"}
                animationOutTiming={animationOutTiming}
                isVisible={visible}
                onBackdropPress={() => closeModal()}
                style={[{ margin: 0, zIndex: 10 }, style]}
                backdropOpacity={backdropOpacity ?? 0.4}
                hideModalContentWhileAnimating={true}
                propagateSwipe={propagateSwipe}
                onSwipeComplete={onSwipeComplete && onSwipeComplete}
                swipeDirection={swipeDirection && [swipeDirection]}>
                {children}
                {closeButton && (
                    <TouchableComponent
                        bounce
                        onPress={closeModal}
                        style={[styles.closeButton]}>
                        <MainIcon color="#43464D" name="close" type="AntDesign" size={20} />
                    </TouchableComponent>
                )}
                <Toast autoHide={true} visibilityTime={3000} config={toastConfig} />
            </Modal>
        </>
    );
};

export default GeneralModal;

const styles = StyleSheet.create({
    closeButton: {
        backgroundColor: colors.white,
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        alignSelf: "center",
        marginTop: 20,
    },
});
