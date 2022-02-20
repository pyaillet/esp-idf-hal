(function() {var implementors = {};
implementors["embedded_hal"] = [{"text":"impl From&lt;<a class=\"struct\" href=\"embedded_hal/can/struct.StandardId.html\" title=\"struct embedded_hal::can::StandardId\">StandardId</a>&gt; for <a class=\"enum\" href=\"embedded_hal/can/enum.Id.html\" title=\"enum embedded_hal::can::Id\">Id</a>","synthetic":false,"types":["embedded_hal::can::id::Id"]},{"text":"impl From&lt;<a class=\"struct\" href=\"embedded_hal/can/struct.ExtendedId.html\" title=\"struct embedded_hal::can::ExtendedId\">ExtendedId</a>&gt; for <a class=\"enum\" href=\"embedded_hal/can/enum.Id.html\" title=\"enum embedded_hal::can::Id\">Id</a>","synthetic":false,"types":["embedded_hal::can::id::Id"]},{"text":"impl From&lt;bool&gt; for <a class=\"enum\" href=\"embedded_hal/digital/enum.PinState.html\" title=\"enum embedded_hal::digital::PinState\">PinState</a>","synthetic":false,"types":["embedded_hal::digital::PinState"]}];
implementors["embedded_svc"] = [{"text":"impl From&lt;<a class=\"struct\" href=\"embedded_svc/ipv4/struct.Mask.html\" title=\"struct embedded_svc::ipv4::Mask\">Mask</a>&gt; for <a class=\"struct\" href=\"embedded_svc/ipv4/struct.Ipv4Addr.html\" title=\"struct embedded_svc::ipv4::Ipv4Addr\">Ipv4Addr</a>","synthetic":false,"types":["no_std_net::ip::Ipv4Addr"]}];
implementors["enumset"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"enumset/trait.EnumSetType.html\" title=\"trait enumset::EnumSetType\">EnumSetType</a>&gt; From&lt;T&gt; for <a class=\"struct\" href=\"enumset/struct.EnumSet.html\" title=\"struct enumset::EnumSet\">EnumSet</a>&lt;T&gt;","synthetic":false,"types":["enumset::EnumSet"]}];
implementors["esp_idf_hal"] = [{"text":"impl From&lt;<a class=\"enum\" href=\"esp_idf_hal/adc/config/enum.Resolution.html\" title=\"enum esp_idf_hal::adc::config::Resolution\">Resolution</a>&gt; for <a class=\"type\" href=\"esp_idf_sys/bindings/type.adc_bits_width_t.html\" title=\"type esp_idf_sys::bindings::adc_bits_width_t\">adc_bits_width_t</a>","synthetic":false,"types":["esp_idf_sys::bindings::adc_bits_width_t"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_sys/error/struct.EspError.html\" title=\"struct esp_idf_sys::error::EspError\">EspError</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/can/struct.CanError.html\" title=\"struct esp_idf_hal::can::CanError\">CanError</a>","synthetic":false,"types":["esp_idf_hal::can::CanError"]},{"text":"impl From&lt;<a class=\"enum\" href=\"esp_idf_hal/can/config/enum.Timing.html\" title=\"enum esp_idf_hal::can::config::Timing\">Timing</a>&gt; for <a class=\"struct\" href=\"esp_idf_sys/bindings/struct.twai_timing_config_t.html\" title=\"struct esp_idf_sys::bindings::twai_timing_config_t\">twai_timing_config_t</a>","synthetic":false,"types":["esp_idf_sys::bindings::twai_timing_config_t"]},{"text":"impl From&lt;Duration&gt; for <a class=\"struct\" href=\"esp_idf_hal/delay/struct.TickType.html\" title=\"struct esp_idf_hal::delay::TickType\">TickType</a>","synthetic":false,"types":["esp_idf_hal::delay::TickType"]},{"text":"impl From&lt;Option&lt;Duration&gt;&gt; for <a class=\"struct\" href=\"esp_idf_hal/delay/struct.TickType.html\" title=\"struct esp_idf_hal::delay::TickType\">TickType</a>","synthetic":false,"types":["esp_idf_hal::delay::TickType"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/delay/struct.TickType.html\" title=\"struct esp_idf_hal::delay::TickType\">TickType</a>&gt; for Duration","synthetic":false,"types":["core::time::Duration"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/delay/struct.TickType.html\" title=\"struct esp_idf_hal::delay::TickType\">TickType</a>&gt; for Option&lt;Duration&gt;","synthetic":false,"types":["core::option::Option"]},{"text":"impl From&lt;<a class=\"enum\" href=\"esp_idf_hal/gpio/enum.DriveStrength.html\" title=\"enum esp_idf_hal::gpio::DriveStrength\">DriveStrength</a>&gt; for <a class=\"type\" href=\"esp_idf_sys/bindings/type.gpio_drive_cap_t.html\" title=\"type esp_idf_sys::bindings::gpio_drive_cap_t\">gpio_drive_cap_t</a>","synthetic":false,"types":["esp_idf_sys::bindings::gpio_drive_cap_t"]},{"text":"impl From&lt;u32&gt; for <a class=\"enum\" href=\"esp_idf_hal/gpio/enum.DriveStrength.html\" title=\"enum esp_idf_hal::gpio::DriveStrength\">DriveStrength</a>","synthetic":false,"types":["esp_idf_hal::gpio::DriveStrength"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_sys/error/struct.EspError.html\" title=\"struct esp_idf_sys::error::EspError\">EspError</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/i2c/struct.I2cError.html\" title=\"struct esp_idf_hal::i2c::I2cError\">I2cError</a>","synthetic":false,"types":["esp_idf_hal::i2c::I2cError"]},{"text":"impl From&lt;<a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.DataBits.html\" title=\"enum esp_idf_hal::serial::config::DataBits\">DataBits</a>&gt; for <a class=\"type\" href=\"esp_idf_sys/bindings/type.uart_word_length_t.html\" title=\"type esp_idf_sys::bindings::uart_word_length_t\">uart_word_length_t</a>","synthetic":false,"types":["esp_idf_sys::bindings::uart_word_length_t"]},{"text":"impl From&lt;u32&gt; for <a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.DataBits.html\" title=\"enum esp_idf_hal::serial::config::DataBits\">DataBits</a>","synthetic":false,"types":["esp_idf_hal::serial::config::DataBits"]},{"text":"impl From&lt;<a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.FlowControl.html\" title=\"enum esp_idf_hal::serial::config::FlowControl\">FlowControl</a>&gt; for <a class=\"type\" href=\"esp_idf_sys/bindings/type.uart_hw_flowcontrol_t.html\" title=\"type esp_idf_sys::bindings::uart_hw_flowcontrol_t\">uart_hw_flowcontrol_t</a>","synthetic":false,"types":["esp_idf_sys::bindings::uart_hw_flowcontrol_t"]},{"text":"impl From&lt;u32&gt; for <a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.FlowControl.html\" title=\"enum esp_idf_hal::serial::config::FlowControl\">FlowControl</a>","synthetic":false,"types":["esp_idf_hal::serial::config::FlowControl"]},{"text":"impl From&lt;<a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.Parity.html\" title=\"enum esp_idf_hal::serial::config::Parity\">Parity</a>&gt; for <a class=\"type\" href=\"esp_idf_sys/bindings/type.uart_parity_t.html\" title=\"type esp_idf_sys::bindings::uart_parity_t\">uart_parity_t</a>","synthetic":false,"types":["esp_idf_sys::bindings::uart_parity_t"]},{"text":"impl From&lt;u32&gt; for <a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.Parity.html\" title=\"enum esp_idf_hal::serial::config::Parity\">Parity</a>","synthetic":false,"types":["esp_idf_hal::serial::config::Parity"]},{"text":"impl From&lt;<a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.StopBits.html\" title=\"enum esp_idf_hal::serial::config::StopBits\">StopBits</a>&gt; for <a class=\"type\" href=\"esp_idf_sys/bindings/type.uart_stop_bits_t.html\" title=\"type esp_idf_sys::bindings::uart_stop_bits_t\">uart_stop_bits_t</a>","synthetic":false,"types":["esp_idf_sys::bindings::uart_stop_bits_t"]},{"text":"impl From&lt;u32&gt; for <a class=\"enum\" href=\"esp_idf_hal/serial/config/enum.StopBits.html\" title=\"enum esp_idf_hal::serial::config::StopBits\">StopBits</a>","synthetic":false,"types":["esp_idf_hal::serial::config::StopBits"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_sys/error/struct.EspError.html\" title=\"struct esp_idf_sys::error::EspError\">EspError</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/serial/struct.SerialError.html\" title=\"struct esp_idf_hal::serial::SerialError\">SerialError</a>","synthetic":false,"types":["esp_idf_hal::serial::SerialError"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_sys/error/struct.EspError.html\" title=\"struct esp_idf_sys::error::EspError\">EspError</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/spi/struct.SpiError.html\" title=\"struct esp_idf_hal::spi::SpiError\">SpiError</a>","synthetic":false,"types":["esp_idf_hal::spi::SpiError"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.V02Type.html\" title=\"struct esp_idf_hal::spi::config::V02Type\">V02Type</a>&lt;<a class=\"enum\" href=\"embedded_hal/spi/enum.Polarity.html\" title=\"enum embedded_hal::spi::Polarity\">Polarity</a>&gt;&gt; for <a class=\"enum\" href=\"embedded_hal/spi/enum.Polarity.html\" title=\"enum embedded_hal::spi::Polarity\">Polarity</a>","synthetic":false,"types":["embedded_hal::spi::Polarity"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.V02Type.html\" title=\"struct esp_idf_hal::spi::config::V02Type\">V02Type</a>&lt;<a class=\"enum\" href=\"embedded_hal/spi/enum.Phase.html\" title=\"enum embedded_hal::spi::Phase\">Phase</a>&gt;&gt; for <a class=\"enum\" href=\"embedded_hal/spi/enum.Phase.html\" title=\"enum embedded_hal::spi::Phase\">Phase</a>","synthetic":false,"types":["embedded_hal::spi::Phase"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.V02Type.html\" title=\"struct esp_idf_hal::spi::config::V02Type\">V02Type</a>&lt;<a class=\"struct\" href=\"embedded_hal/spi/struct.Mode.html\" title=\"struct embedded_hal::spi::Mode\">Mode</a>&gt;&gt; for <a class=\"struct\" href=\"embedded_hal/spi/struct.Mode.html\" title=\"struct embedded_hal::spi::Mode\">Mode</a>","synthetic":false,"types":["embedded_hal::spi::Mode"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Hertz.html\" title=\"struct esp_idf_hal::units::Hertz\">Hertz</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.Hertz.html\" title=\"struct esp_idf_hal::units::Hertz\">Hertz</a>","synthetic":false,"types":["esp_idf_hal::units::Hertz"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertz.html\" title=\"struct esp_idf_hal::units::KiloHertz\">KiloHertz</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertz.html\" title=\"struct esp_idf_hal::units::KiloHertz\">KiloHertz</a>","synthetic":false,"types":["esp_idf_hal::units::KiloHertz"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertz.html\" title=\"struct esp_idf_hal::units::MegaHertz\">MegaHertz</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertz.html\" title=\"struct esp_idf_hal::units::MegaHertz\">MegaHertz</a>","synthetic":false,"types":["esp_idf_hal::units::MegaHertz"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSeconds.html\" title=\"struct esp_idf_hal::units::NanoSeconds\">NanoSeconds</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSeconds.html\" title=\"struct esp_idf_hal::units::NanoSeconds\">NanoSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSeconds.html\" title=\"struct esp_idf_hal::units::MicroSeconds\">MicroSeconds</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSeconds.html\" title=\"struct esp_idf_hal::units::MicroSeconds\">MicroSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::MilliSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>","synthetic":false,"types":["esp_idf_hal::units::Seconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Ticks.html\" title=\"struct esp_idf_hal::units::Ticks\">Ticks</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.ValueType.html\" title=\"type esp_idf_hal::units::ValueType\">ValueType</a>","synthetic":false,"types":["esp_idf_hal::units::ValueType"]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.Ticks.html\" title=\"struct esp_idf_hal::units::Ticks\">Ticks</a>","synthetic":false,"types":["esp_idf_hal::units::Ticks"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.HertzU64.html\" title=\"struct esp_idf_hal::units::HertzU64\">HertzU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.HertzU64.html\" title=\"struct esp_idf_hal::units::HertzU64\">HertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::HertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertzU64.html\" title=\"struct esp_idf_hal::units::KiloHertzU64\">KiloHertzU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertzU64.html\" title=\"struct esp_idf_hal::units::KiloHertzU64\">KiloHertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::KiloHertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertzU64.html\" title=\"struct esp_idf_hal::units::MegaHertzU64\">MegaHertzU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertzU64.html\" title=\"struct esp_idf_hal::units::MegaHertzU64\">MegaHertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::MegaHertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSecondsU64.html\" title=\"struct esp_idf_hal::units::MilliSecondsU64\">MilliSecondsU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSecondsU64.html\" title=\"struct esp_idf_hal::units::MilliSecondsU64\">MilliSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MilliSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.SecondsU64.html\" title=\"struct esp_idf_hal::units::SecondsU64\">SecondsU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.SecondsU64.html\" title=\"struct esp_idf_hal::units::SecondsU64\">SecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::SecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.TicksU64.html\" title=\"struct esp_idf_hal::units::TicksU64\">TicksU64</a>&gt; for <a class=\"type\" href=\"esp_idf_hal/units/type.LargeValueType.html\" title=\"type esp_idf_hal::units::LargeValueType\">LargeValueType</a>","synthetic":false,"types":["esp_idf_hal::units::LargeValueType"]},{"text":"impl From&lt;u64&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.TicksU64.html\" title=\"struct esp_idf_hal::units::TicksU64\">TicksU64</a>","synthetic":false,"types":["esp_idf_hal::units::TicksU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Hertz.html\" title=\"struct esp_idf_hal::units::Hertz\">Hertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.HertzU64.html\" title=\"struct esp_idf_hal::units::HertzU64\">HertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::HertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertz.html\" title=\"struct esp_idf_hal::units::KiloHertz\">KiloHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertzU64.html\" title=\"struct esp_idf_hal::units::KiloHertzU64\">KiloHertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::KiloHertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertz.html\" title=\"struct esp_idf_hal::units::MegaHertz\">MegaHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertzU64.html\" title=\"struct esp_idf_hal::units::MegaHertzU64\">MegaHertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::MegaHertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSeconds.html\" title=\"struct esp_idf_hal::units::NanoSeconds\">NanoSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSeconds.html\" title=\"struct esp_idf_hal::units::MicroSeconds\">MicroSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSecondsU64.html\" title=\"struct esp_idf_hal::units::MilliSecondsU64\">MilliSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MilliSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.SecondsU64.html\" title=\"struct esp_idf_hal::units::SecondsU64\">SecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::SecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Ticks.html\" title=\"struct esp_idf_hal::units::Ticks\">Ticks</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.TicksU64.html\" title=\"struct esp_idf_hal::units::TicksU64\">TicksU64</a>","synthetic":false,"types":["esp_idf_hal::units::TicksU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertz.html\" title=\"struct esp_idf_hal::units::KiloHertz\">KiloHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.Hertz.html\" title=\"struct esp_idf_hal::units::Hertz\">Hertz</a>","synthetic":false,"types":["esp_idf_hal::units::Hertz"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertz.html\" title=\"struct esp_idf_hal::units::KiloHertz\">KiloHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.HertzU64.html\" title=\"struct esp_idf_hal::units::HertzU64\">HertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::HertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertzU64.html\" title=\"struct esp_idf_hal::units::KiloHertzU64\">KiloHertzU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.HertzU64.html\" title=\"struct esp_idf_hal::units::HertzU64\">HertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::HertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertz.html\" title=\"struct esp_idf_hal::units::MegaHertz\">MegaHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.Hertz.html\" title=\"struct esp_idf_hal::units::Hertz\">Hertz</a>","synthetic":false,"types":["esp_idf_hal::units::Hertz"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertz.html\" title=\"struct esp_idf_hal::units::MegaHertz\">MegaHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.HertzU64.html\" title=\"struct esp_idf_hal::units::HertzU64\">HertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::HertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertzU64.html\" title=\"struct esp_idf_hal::units::MegaHertzU64\">MegaHertzU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.HertzU64.html\" title=\"struct esp_idf_hal::units::HertzU64\">HertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::HertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertz.html\" title=\"struct esp_idf_hal::units::MegaHertz\">MegaHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertz.html\" title=\"struct esp_idf_hal::units::KiloHertz\">KiloHertz</a>","synthetic":false,"types":["esp_idf_hal::units::KiloHertz"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertz.html\" title=\"struct esp_idf_hal::units::MegaHertz\">MegaHertz</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertzU64.html\" title=\"struct esp_idf_hal::units::KiloHertzU64\">KiloHertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::KiloHertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MegaHertzU64.html\" title=\"struct esp_idf_hal::units::MegaHertzU64\">MegaHertzU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.KiloHertzU64.html\" title=\"struct esp_idf_hal::units::KiloHertzU64\">KiloHertzU64</a>","synthetic":false,"types":["esp_idf_hal::units::KiloHertzU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::MilliSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSecondsU64.html\" title=\"struct esp_idf_hal::units::MilliSecondsU64\">MilliSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MilliSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.SecondsU64.html\" title=\"struct esp_idf_hal::units::SecondsU64\">SecondsU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSecondsU64.html\" title=\"struct esp_idf_hal::units::MilliSecondsU64\">MilliSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MilliSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSeconds.html\" title=\"struct esp_idf_hal::units::MicroSeconds\">MicroSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.SecondsU64.html\" title=\"struct esp_idf_hal::units::SecondsU64\">SecondsU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSeconds.html\" title=\"struct esp_idf_hal::units::NanoSeconds\">NanoSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.Seconds.html\" title=\"struct esp_idf_hal::units::Seconds\">Seconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.SecondsU64.html\" title=\"struct esp_idf_hal::units::SecondsU64\">SecondsU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSeconds.html\" title=\"struct esp_idf_hal::units::MicroSeconds\">MicroSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSecondsU64.html\" title=\"struct esp_idf_hal::units::MilliSecondsU64\">MilliSecondsU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::MicroSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSeconds.html\" title=\"struct esp_idf_hal::units::NanoSeconds\">NanoSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSeconds.html\" title=\"struct esp_idf_hal::units::MilliSeconds\">MilliSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MilliSecondsU64.html\" title=\"struct esp_idf_hal::units::MilliSecondsU64\">MilliSecondsU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSeconds.html\" title=\"struct esp_idf_hal::units::MicroSeconds\">MicroSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSeconds.html\" title=\"struct esp_idf_hal::units::NanoSeconds\">NanoSeconds</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSeconds"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSeconds.html\" title=\"struct esp_idf_hal::units::MicroSeconds\">MicroSeconds</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]},{"text":"impl From&lt;<a class=\"struct\" href=\"esp_idf_hal/units/struct.MicroSecondsU64.html\" title=\"struct esp_idf_hal::units::MicroSecondsU64\">MicroSecondsU64</a>&gt; for <a class=\"struct\" href=\"esp_idf_hal/units/struct.NanoSecondsU64.html\" title=\"struct esp_idf_hal::units::NanoSecondsU64\">NanoSecondsU64</a>","synthetic":false,"types":["esp_idf_hal::units::NanoSecondsU64"]}];
implementors["nb"] = [{"text":"impl&lt;E&gt; From&lt;E&gt; for <a class=\"enum\" href=\"nb/enum.Error.html\" title=\"enum nb::Error\">Error</a>&lt;E&gt;","synthetic":false,"types":["nb::Error"]}];
implementors["no_std_net"] = [{"text":"impl From&lt;<a class=\"struct\" href=\"no_std_net/struct.SocketAddrV4.html\" title=\"struct no_std_net::SocketAddrV4\">SocketAddrV4</a>&gt; for <a class=\"enum\" href=\"no_std_net/enum.SocketAddr.html\" title=\"enum no_std_net::SocketAddr\">SocketAddr</a>","synthetic":false,"types":["no_std_net::addr::SocketAddr"]},{"text":"impl From&lt;<a class=\"struct\" href=\"no_std_net/struct.SocketAddrV6.html\" title=\"struct no_std_net::SocketAddrV6\">SocketAddrV6</a>&gt; for <a class=\"enum\" href=\"no_std_net/enum.SocketAddr.html\" title=\"enum no_std_net::SocketAddr\">SocketAddr</a>","synthetic":false,"types":["no_std_net::addr::SocketAddr"]},{"text":"impl&lt;I:&nbsp;Into&lt;<a class=\"enum\" href=\"no_std_net/enum.IpAddr.html\" title=\"enum no_std_net::IpAddr\">IpAddr</a>&gt;&gt; From&lt;(I, u16)&gt; for <a class=\"enum\" href=\"no_std_net/enum.SocketAddr.html\" title=\"enum no_std_net::SocketAddr\">SocketAddr</a>","synthetic":false,"types":["no_std_net::addr::SocketAddr"]},{"text":"impl From&lt;[u8; 4]&gt; for <a class=\"struct\" href=\"no_std_net/struct.Ipv4Addr.html\" title=\"struct no_std_net::Ipv4Addr\">Ipv4Addr</a>","synthetic":false,"types":["no_std_net::ip::Ipv4Addr"]},{"text":"impl From&lt;[u8; 4]&gt; for <a class=\"enum\" href=\"no_std_net/enum.IpAddr.html\" title=\"enum no_std_net::IpAddr\">IpAddr</a>","synthetic":false,"types":["no_std_net::ip::IpAddr"]},{"text":"impl From&lt;[u8; 16]&gt; for <a class=\"struct\" href=\"no_std_net/struct.Ipv6Addr.html\" title=\"struct no_std_net::Ipv6Addr\">Ipv6Addr</a>","synthetic":false,"types":["no_std_net::ip::Ipv6Addr"]},{"text":"impl From&lt;[u16; 8]&gt; for <a class=\"struct\" href=\"no_std_net/struct.Ipv6Addr.html\" title=\"struct no_std_net::Ipv6Addr\">Ipv6Addr</a>","synthetic":false,"types":["no_std_net::ip::Ipv6Addr"]},{"text":"impl From&lt;[u8; 16]&gt; for <a class=\"enum\" href=\"no_std_net/enum.IpAddr.html\" title=\"enum no_std_net::IpAddr\">IpAddr</a>","synthetic":false,"types":["no_std_net::ip::IpAddr"]},{"text":"impl From&lt;[u16; 8]&gt; for <a class=\"enum\" href=\"no_std_net/enum.IpAddr.html\" title=\"enum no_std_net::IpAddr\">IpAddr</a>","synthetic":false,"types":["no_std_net::ip::IpAddr"]},{"text":"impl From&lt;<a class=\"struct\" href=\"no_std_net/struct.Ipv4Addr.html\" title=\"struct no_std_net::Ipv4Addr\">Ipv4Addr</a>&gt; for <a class=\"enum\" href=\"no_std_net/enum.IpAddr.html\" title=\"enum no_std_net::IpAddr\">IpAddr</a>","synthetic":false,"types":["no_std_net::ip::IpAddr"]},{"text":"impl From&lt;<a class=\"struct\" href=\"no_std_net/struct.Ipv6Addr.html\" title=\"struct no_std_net::Ipv6Addr\">Ipv6Addr</a>&gt; for <a class=\"enum\" href=\"no_std_net/enum.IpAddr.html\" title=\"enum no_std_net::IpAddr\">IpAddr</a>","synthetic":false,"types":["no_std_net::ip::IpAddr"]},{"text":"impl From&lt;<a class=\"struct\" href=\"no_std_net/struct.Ipv4Addr.html\" title=\"struct no_std_net::Ipv4Addr\">Ipv4Addr</a>&gt; for u32","synthetic":false,"types":[]},{"text":"impl From&lt;u32&gt; for <a class=\"struct\" href=\"no_std_net/struct.Ipv4Addr.html\" title=\"struct no_std_net::Ipv4Addr\">Ipv4Addr</a>","synthetic":false,"types":["no_std_net::ip::Ipv4Addr"]},{"text":"impl From&lt;<a class=\"struct\" href=\"no_std_net/struct.Ipv6Addr.html\" title=\"struct no_std_net::Ipv6Addr\">Ipv6Addr</a>&gt; for u128","synthetic":false,"types":[]},{"text":"impl From&lt;u128&gt; for <a class=\"struct\" href=\"no_std_net/struct.Ipv6Addr.html\" title=\"struct no_std_net::Ipv6Addr\">Ipv6Addr</a>","synthetic":false,"types":["no_std_net::ip::Ipv6Addr"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()