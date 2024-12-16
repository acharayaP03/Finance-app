<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

const { loading, open } = useHelpers();

const createNewProduct = async () => {
    try {
        loading.value = true

        // my call
    } catch (error: any) {
        throw new Error(error)
    } finally {
        loading.value = false;
        open.value = false;
    }
}
</script>

<template>
    <AlertDialog>
        <AlertDialogTrigger as-child>
            <Button>
                Add new product
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Create a new product</AlertDialogTitle>
                <Input placeholder="My product name" class="p-2"/>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction @click="createNewProduct">Create</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>