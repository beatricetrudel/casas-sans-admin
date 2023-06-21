'use client';

import { Reservation } from "@prisma/client";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingReservation from "@/app/components/listings/ListingReservation";
import { Range } from "react-date-range";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
};

interface ListingClientProps {
    reservations?: SafeReservation[]; // Propriété pour les réservations sécurisées (optionnelle)
    listing: SafeListing & {
        user: SafeUser
    };
    currentUser?: SafeUser | null;
}

const ListingClient:React.FC<ListingClientProps> = ({
    listing,
    reservations = [],
    currentUser,

}) => {
    const loginModal = useLoginModal(); // Utilise le hook useLoginModal pour la gestion de la fenêtre de connexion
    const router = useRouter(); // Utilise le hook useRouter pour la navigation

    const disabledDates = useMemo(() => {
        let dates: Date[] = [];

        reservations.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate),
            });

            dates = [...dates, ...range];
        });

        return dates;
    }, [reservations]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    const onCreateReservation = useCallback( () => {
        if (!currentUser) {
            return loginModal.onOpen();
        }
           setIsLoading(true); 

           axios.post('/api/reservations', {
                listingId: listing?.id,
                startDate: dateRange.startDate,
                endDate: dateRange.endDate,
                totalPrice,
            })
            .then(() => {
                toast.success('Reservation obtenu');
                setDateRange(initialDateRange);

                // rediriger vers la page de réservation
                router.push("/trips");
            })
            .catch(() => {
                toast.error('Une erreur est survenue');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [currentUser, dateRange, listing?.id, router, totalPrice, loginModal]);

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            );

            if (dayCount && listing.price) {
                setTotalPrice(dayCount * listing.price);
            } else {
                setTotalPrice(listing.price);
            }
        }
    }, [dateRange, listing.price]);

    const category = useMemo(() => {
        return categories.find((item) => 
        item.label === listing.category);
    }, [listing.category]);

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6 pb-10">
                    <ListingHead
                    title={listing.title}
                    imageSrc={listing.imageSrc}
                    locationValue={listing.locationValue}
                    id={listing.id}
                    currentUser={currentUser}
                    />
                    <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-7
                    md:gap-10
                    mt-6
                    ">
                        <ListingInfo
                            user={listing.user}
                            category={category}
                            description={listing.description}
                            roomCount={listing.roomCount}
                            guestCount={listing.guestCount}
                            bathroomCount={listing.bathroomCount}
                            locationValue={listing.locationValue}
                        />
                        <div
                            className="
                            order-firt
                            mb-10
                            md:order-last
                            md:col-span-3
                            "
                        >
                            <ListingReservation
                                price={listing.price}
                                totalPrice={totalPrice}
                                onChangeDate={(value) => setDateRange(value)}
                                dateRange={dateRange}
                                onSubmit={onCreateReservation}
                                disabled={isLoading}
                                disabledDates={disabledDates}
                            />

                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
}

export default ListingClient;