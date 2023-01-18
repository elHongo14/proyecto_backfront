<template>
    <v-card class="cardLogin">
        <v-card-title>Login</v-card-title>
        <v-card-text>
            <v-form v-model="formularioValido">
                <v-text-field label="Correo Electrónico"
                                placeholder="Correo Electrónico"
                                v-model="correoElec"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            Boton pa culiar
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            formularioValido: false,
            correoElec: ''
        }
    }
}
</script>

<style scoped>
.cardLogin {
    background-color: #7be396;
    border-radius: 10px;
    width: 500px;
    height: 500px;
}
</style>