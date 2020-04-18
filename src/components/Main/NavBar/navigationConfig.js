/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import {colors} from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodaySharp';
import ListAltIcon from '@material-ui/icons/ListAltSharp';
import HomeWork from '@material-ui/icons/HomeWorkSharp';
import SettingsSharp from '@material-ui/icons/SettingsSharp';
import ImportContactsSharp from '@material-ui/icons/ImportContactsSharp';
import RecentActorsSharp from '@material-ui/icons/RecentActorsSharp';
import TrendingUpSharp from '@material-ui/icons/TrendingUpSharp';


export default [
    {
        title: undefined,
        pages: [
            {
                title: 'Zamówienia',
                href: '/orders',
                icon: CalendarTodayIcon
            },
            {
                title: 'Planowanie',
                href: '/planning',
                icon: ListAltIcon
            },
            {
                title: 'Produkcja',
                href: '/production',
                icon: SettingsSharp
            },
            {
                title: 'Magazyn',
                href: '/warehouse',
                icon: HomeWork,
                children: [
                    {
                        title: 'Materiały',
                        href: '/warehouse/materials'
                    },
                    {
                        title: 'Półprodukty',
                        href: '/warehouse/intermediates'
                    },
                    {
                        title: 'Produkty',
                        href: '/warehouse/products'
                    }
                ]
            },
            {
                title: 'Oferta',
                href: '/catalog',
                icon: ImportContactsSharp,
                children: [
                    {
                        title: 'Produkty',
                        href: '/catalog/products'
                    },
                    {
                        title: 'Materiały',
                        href: '/catalog/materials'
                    }
                ]
            },
            {
                title: 'Kontakty',
                href: '/contacts',
                icon: RecentActorsSharp
            },
            {
                title: 'Zestawienia',
                href: '/reports',
                icon: TrendingUpSharp
            },
        ]
    }
];
