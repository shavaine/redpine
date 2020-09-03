<template>
    <v-container class=" py-0" fluid>
        <!--    Banner-->
        <v-row class="grey lighten-3 banner hero-image" justify="center" align-content="center">
            <v-row
                    class="fill-height caro-gradient "
                    align="center"
                    justify="center"
            >
                <div class="display-2 font-weight-medium white--text"> Admin</div>
            </v-row>
        </v-row>
        <!--    banner-->
        <v-row>
            <v-col :cols="12" :lg="6">
                <v-data-table
                        :headers="resHeader"
                        :items="reservations"
                        :items-per-page="5"
                        :expanded.sync="expanded"
                        item-key="firstName"
                        show-expand
                        class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Reservations</v-toolbar-title>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.firstName="{ item }">
                        <td>{{ item.firstName }} {{ item.lastName }}</td>
                    </template>
                    <template v-slot:item.status="{ item }">
                        <td><v-btn class="text-capitalize" @click="toggleStatus(item.id)">{{ item.status }}</v-btn></td>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-row justify="center">
                                <v-col :cols="12" :md="8">
                                    <v-card class="pa-3" color="grey lighten-1">
                                        <v-card-title>
                                            Guest Info
                                        </v-card-title>
                                        <v-card-text class="text-body-1 text-sm-h6">
                                            <v-row>
                                                <v-col :cols="4" :sm="5">
                                                    <div>Room:</div>
                                                    <div>Adults:</div>
                                                    <div>Children:</div>
                                                    <div>Email:</div>
                                                    <div>Phone:</div>
                                                    <div>Address:</div>
                                                    <div>City:</div>
                                                    <div>Postal:</div>
                                                    <div>Country:</div>
                                                </v-col>
                                                <v-col :cols="8" :sm="7">
                                                    <div>{{ item.roomType }}</div>
                                                    <div>{{ item.adults }}</div>
                                                    <div>{{ item.children }}</div>
                                                    <div>{{ item.email }}</div>
                                                    <div>{{ item.phone }}</div>
                                                    <div>{{ item.address }}</div>
                                                    <div>{{ item.city }}</div>
                                                    <div>{{ item.postalCode }}</div>
                                                    <div>{{ item.country }}</div>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-col>

                            </v-row>
                        </td>
                    </template>
                </v-data-table>
            </v-col>
            <v-col :cols="12" :lg="6">
                <v-data-table
                        :headers="mesHeader"
                        :items="messages"
                        :items-per-page="5"
                        :expanded.sync="expanded2"
                        item-key="guestName"
                        show-expand
                        class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Messages</v-toolbar-title>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.status="{ item }">
                        <td><v-btn class="text-capitalize" @click="toggleStatusMessage(item.id)">{{ item.status }}</v-btn></td>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-row justify="center">
                                <v-col :cols="12" :md="8">
                                    <v-card class="pa-3" color="grey lighten-1">
                                        <v-card-text class="text-body-1">
                                            <v-row>
                                                <v-col :cols="8" :sm="3">
                                                    <div>Message:</div>
                                                </v-col>
                                                <v-col :cols="12" :sm="8">
                                                    <div>{{ item.memo }}</div>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-col>

                            </v-row>
                        </td>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-btn class="mb-8" color="#7f0000" dark @click="logout">Logout</v-btn>
    </v-container>

</template>

<script>
    import Firebase from "firebase/app"
    import 'firebase/auth';
    import db from "../db"

    export default {
        name: "Admin",
        data: () => ({
            expanded: [],
            expanded2: [],
            reservations: [],
            messages: [],
            resHeader: [
                { text: 'Guest Name', value: 'firstName'},
                { text: 'Created At', value: 'createdAt'},
                { text: 'Check-In', value: 'checkInDate' },
                { text: 'Check-Out', value: 'checkOutDate' },
                { text: 'Status', value: 'status' },
                { text: '', value: 'data-table-expand' },
            ],
            mesHeader: [
                { text: 'Name', value: 'guestName'},
                { text: 'Created At', value: 'createdAt'},
                { text: 'Email', value: 'email' },
                { text: 'Phone', value: 'phone' },
                { text: 'Status', value: 'status' },
                { text: '', value: 'data-table-expand' },
            ],
        }),
        methods: {
            logout: function() {
                Firebase.auth()
                .signOut()
                .then( ()=>{
                    this.$router.push("login")
                })
            },
            toggleStatus: function(reservationID) {
                    const ref = db
                        .collection("reservations")
                        .doc(reservationID);

                    ref.get().then(doc => {
                        const status = doc.data().status;
                        if (status === "Not-Contacted") {
                            ref.update({
                                status: "Contacted"
                            });
                        } else {
                            ref.update({
                                status: "Not-Contacted"
                            });
                        }
                    });
            },
            toggleStatusMessage: function(messageID) {
                const ref = db
                    .collection("messages")
                    .doc(messageID);

                ref.get().then(doc => {
                    const status = doc.data().status;
                    if (status === "Unread") {
                        ref.update({
                            status: "Read"
                        });
                    } else {
                        ref.update({
                            status: "Unread"
                        });
                    }
                });
            },
        },
        mounted() {
            db.collection("reservations")
                .onSnapshot(snapshot => {
                    const snapData = [];
                    snapshot.forEach(doc => {
                        snapData.push({
                            id: doc.id,
                            firstName: doc.data().firstName,
                            lastName: doc.data().lastName,
                            checkInDate: doc.data().checkInDate,
                            checkOutDate: doc.data().checkOutDate,
                            status: doc.data().status,
                            createdAt: doc.data().createdAt.toDate().toDateString(),
                            address: doc.data().address,
                            city: doc.data().city,
                            country: doc.data().country,
                            email: doc.data().email,
                            phone: doc.data().phone,
                            postalCode: doc.data().postalCode,
                            roomType: doc.data().roomType,
                            adults: doc.data().adults,
                            children: doc.data().children,
                        });
                    });
                    this.reservations = snapData;
                });

            db.collection("messages")
                .onSnapshot(snapshot => {
                    const snapData2 = [];
                    snapshot.forEach(doc => {
                        snapData2.push({
                            id: doc.id,
                            guestName: doc.data().guestName,
                            email: doc.data().email,
                            phone: doc.data().phone,
                            status: doc.data().status,
                            memo: doc.data().memo,
                            createdAt: doc.data().createdAt.toDate().toDateString()
                        });
                    });
                    this.messages = snapData2;
                })
        }
    }

</script>

<style scoped>
    .banner {
        height: 250px;
    }
    .hero-image {
        background-image: url("../assets/images/Pillows.jpg"); /* The image used */
        background-color: #cccccc; /* Used if the image is unavailable */
        height: 250px; /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
    }
    .caro-gradient{
        background: rgb(46,41,41);
        background: linear-gradient(90deg, rgba(46,41,41,0.6362920168067228) 100%, rgba(46,41,41,1) 100%, rgba(46,41,41,1) 100%);
    }
</style>