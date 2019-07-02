package com.kiwi.rnkiwimobile.hotels

import com.skypicker.reactnative.nativemodules.currency.CurrencyChangeCallback
import com.skypicker.reactnative.nativemodules.translation.ResourceStringCallback

interface AncillariesModulesInjection {
  val translationCallback: ResourceStringCallback
  val currencyCallback: CurrencyChangeCallback
  val hasActiveBooking: Boolean
}